const GitHubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const { OAuthSchemaGithub } = require("../../model/OAuthModel");
const { jwtToken } = require("../../middleware/jwt");

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.Github_Client_ID,
      clientSecret: process.env.Github_Client_Secret,
      callbackURL: process.env.Github_Redirect_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      const exists=await OAuthSchemaGithub.exists({id:profile.id})
      if (!exists) {
      if (!profile) return await done(new Error("No profile data received from GitHub"), null);
      await OAuthSchemaGithub.create({
        id: profile.id,
        displayName: profile.displayName,
        profileUrl: profile.profileUrl,
        photos: profile.photos,
        provider: profile.provider,
        bio: profile._json.bio,
        created_at: profile._json.created_at,
        updated_at: profile._json.updated_at,
      });  
      }

      
      const token =await jwtToken(profile.id,profile.diplayName,profile.emails[0].value,"Github")

      return done(null, profile,{token});
    }
  )
);
