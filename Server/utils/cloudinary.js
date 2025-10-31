const Cloudinary = require("cloudinary").v2;
require("dotenv").config();

Cloudinary.config({
  cloud_name: process.env.CloudinaryName,
  api_key: process.env.CloudinaryApiKey,
  api_secret: process.env.CloudinarySecretKey,
  secure: true,
});

const UploadCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    const Response = await Cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    return Response;
  } catch (error) {
    return error;
  }
};

module.exports = { UploadCloudinary };
