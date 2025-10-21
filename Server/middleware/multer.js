const fs = require("fs");
const multer = require("multer");
const path = require("path");

class uploader {
  #folder = path.join(__dirname, "../uploads");
  constructor() {
    if (!fs.existsSync(this.#folder)) {
      fs.mkdirSync(this.#folder);
      console.log("Upload folder created successfully.");
    } else {
      console.log("Upload folder already exists.");
    }
  }
  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, this.#folder);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
    },
  });

  limits = {
    fileSize: 1024 * 1024 * 50,
  };

  upload = multer({
    storage: this.storage,
    limits: this.limits,
  });
}
const { upload } = new uploader();
module.exports = upload;
