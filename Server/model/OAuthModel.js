




const mongoose = require("mongoose");
const OAuthSchemaGoogle = new mongoose.Schema({
  sub: { type: Number },
  name: { type: String },
  given_name: { type: String },
  family_name: { type: String },
  picture: { type: String },
  email: { type: String },
  email_verified: { type: Boolean },
  locale: {type:String}
});
const OAuthSchemaLinkedin = new mongoose.Schema({
  sub: { type: String },
  name: { type: String },
  given_name: { type: String },
  family_name: { type: String },
  picture: { type: String },
  email: { type: String },
  email_verified: { type: Boolean },
  locale: {type:String}
});
const OAuthSchemaGithub = new mongoose.Schema({
  id: { type: Number },
  displayName: { type: String },
  profileUrl: { type: String },
  photos: { type: Array },
  provider: { type: String },
  bio: { type: String },
created_at: { type: Date },
updated_at: { type: Date }
});
module.exports = {
  OAuthSchemaLinkedin:mongoose.model("OAuthSchemaLinkedin", OAuthSchemaLinkedin),
  OAuthSchemaGoogle: mongoose.model("OAuthSchemaGoogle", OAuthSchemaGoogle),
  OAuthSchemaGithub: mongoose.model("OAuthSchemaGithub", OAuthSchemaGithub),
};
