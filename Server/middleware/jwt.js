require("dotenv").config({ path: "../.env" });

class Jwt {
  jwt = require("jsonwebtoken");
  #jwtSecret = process.env.jwtSecret;
  jwtToken = async (id, Username, email, provider) => {
    return this.jwt.sign({ id, Username, email, provider }, this.#jwtSecret, {
      expiresIn: "1h",
    });
  };
  VerifyToken = async (req, res, next) => {
    const token = await req.headers["authorization"].split(" ")[1];

    if (!token)
      await res
        .status(401)
        .json({ message: "Token not provided or token is Expired" });
    const decoded = await this.jwt.verify(token, this.#jwtSecret);

    req.user = decoded;
    next();
  };
  jwtGoogle = async (req, res) => {
    if (!(await req?.authInfo?.token))
      return res.json({ massege: "Token not found Re-Try !!" }).status(401);

    const token = await req.authInfo.token;

    res.cookie("GoogleToken", token, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
    });

    return res.redirect("http://localhost:5173/dashboard");
  };

  jwtGithub = async (req, res) => {
    if (!(await req?.authInfo?.token))
      return res.json({ massege: "Token not found Re-Try !!" }).status(401);

    const token = await req.authInfo.token;

    res.cookie("GitHubToken", token, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
    });

    return res.redirect("http://localhost:5173/dashboard");
  };
}
const { jwtToken, VerifyToken, jwtGoogle, jwtGithub } = new Jwt();

module.exports = { jwtToken, VerifyToken, jwtGoogle, jwtGithub };
