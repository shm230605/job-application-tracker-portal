const express =
  require("express");

const router =
  express.Router();

const {
  uploadResume,
} = require(
  "../controllers/uploadController"
);

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const upload =
  require(
    "../middleware/uploadMiddleware"
  );

router.post(
  "/resume",

  authMiddleware,

  upload.single("resume"),

  uploadResume
);

module.exports =
  router;