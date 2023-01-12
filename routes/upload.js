const express = require("express");
const { uploadImages } = require("../controller/upload");
const { authUser } = require("../middlwares/auth");
const imageUpload = require("../middlwares/imageUpload");

const router = express.Router();

router.post("/uploadImages", imageUpload, uploadImages);

module.exports = router;
