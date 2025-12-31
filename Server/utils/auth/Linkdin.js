require("dotenv").config();
const axios = require("axios");
const { OAuthSchemaLinkedin } = require("../../model/OAuthModel");
const { jwtToken } = require("../../middleware/jwt");

const Linkedin = async (req, res) => {
  return await res.redirect(
    `https://www.linkedin.com/oauth/v2/authorization?${new URLSearchParams({
      response_type: "code",
      client_id: process.env.Linkedin_Client_ID,
      redirect_uri: "http://localhost:3000/auth/linkedin/callback",
      scope: ["openid", "profile", "email"],
    }).toString()}`
  );
};

const LinkedinCallback = async (req, res) => {
  if (!req?.query?.code)
    return res
      .status(400)
      .json({ message: "Authorization code is missing please try again" });
  const {
    data: { access_token },
  } = await LinkedinAccessToken(req.query.code);
  const { data } = await axios.get(`https://api.linkedin.com/v2/userinfo`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const exists = OAuthSchemaLinkedin.exists({ sub: data.sub });
  if (!exists) {
    if (!data)
      return res
        .status(400)
        .json({ message: "Unable to fetch user data from linkedin" });
    await OAuthSchemaLinkedin.create({
      sub: data.sub,
      name: data.name,
      given_name: data.given_name,
      family_name: data.family_name,
      picture: data.picture,
      email: data.email,
      email_verified: data.email_verified,
    });
  }

  const token = await jwtToken(data.sub, data.name, data.email, "Linkedin");
  console.log(token);
  
  res.cookie("Linkedin", token, {
    maxAge: 60 * 60 * 1000,
    secure: false,
    httpOnly: true,
  });
  return res.redirect("http://localhost:5173/dashboard");
};

const LinkedinAccessToken = async (code) => {
  try {

  return await axios.post(
    `https://www.linkedin.com/oauth/v2/accessToken`,
    new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      client_id: process.env.Linkedin_Client_ID,
      client_secret: process.env.Linkedin_Client_Secret,
      redirect_uri: process.env.Linkedin_Redirect_URL,
    }).toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      } ,
    }
  );

  } catch (error) {
    return error;
  }
};
module.exports = { Linkedin, LinkedinCallback };
