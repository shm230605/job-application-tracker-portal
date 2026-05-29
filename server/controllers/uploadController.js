const Resume =
  require("../models/Resume");

const uploadResume =
  async (req, res) => {
    try {
      const resume =
        await Resume.create({
          user:
            req.user._id,

          application:
            req.body
              .applicationId,

          resumeUrl:
            req.file.path,

          fileName:
            req.file.originalname,
        });

      res.status(201).json(
        resume
      );
    } catch (error) {
      res.status(500);

      throw new Error(
        error.message
      );
    }
  };

module.exports = {
  uploadResume,
};