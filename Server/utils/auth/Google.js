const passport = require("passport");
const { OAuthSchemaGoogle } = require("../../model/OAuthModel");
const { jwtToken } = require("../../middleware/jwt");

require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.Google_Client_ID,
      clientSecret: process.env.Google_Client_Secret,
      callbackURL: process.env.Google_Redirect_URL,
    },
    async function (accessToken, refreshToken, profile, cb) {
      if (!profile) return await cb(new Error("No profile data received from Google"), null);
      console.log(profile);
      
      await OAuthSchemaGoogle.create({
        sub: profile._json.sub,
        name: profile._json.name,
        given_name: profile._json.given_name,
        family_name: profile._json.family_name,
        picture: profile._json.picture,
        email: profile._json.email,
        email_verified: profile._json.email_verified,
      });
const token = await jwtToken(profile.id,profile.diplayName,profile.emails[0].value,"google")
      return cb(null, profile,{token});
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
