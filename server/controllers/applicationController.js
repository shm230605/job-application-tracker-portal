const Application =
  require("../models/Application");

const {
  extractKeywords,
} = require(
  "../services/keywordExtractor"
);


// =============================
// GET ALL APPLICATIONS
// =============================

const getApplications =
  async (req, res) => {
    try {
      const applications =
        await Application.find({
          user: req.user._id,
        }).sort({
          createdAt: -1,
        });

      res.json(
        applications
      );
    } catch (error) {
      res.status(500);

      throw new Error(
        error.message
      );
    }
  };


// =============================
// CREATE APPLICATION
// =============================

const createApplication =
  async (req, res) => {
    try {
      const {
        companyName,
        role,
        status,
        location,
        jobDescription,
      } = req.body;

      // ==========================
      // ATS KEYWORDS EXTRACTION
      // ==========================

      const skills =
        extractKeywords(
          jobDescription ||
            ""
        );

      // ==========================
      // ATS SCORE GENERATOR
      // ==========================

      const atsScore =
        Math.floor(
          Math.random() *
            40
        ) + 60;

      // ==========================
      // CREATE APPLICATION
      // ==========================

      const application =
        await Application.create(
          {
            user:
              req.user._id,

            companyName,

            role,

            status,

            location,

            jobDescription,

            skills,

            atsScore,
          }
        );

      res.status(201).json(
        application
      );
    } catch (error) {
      res.status(500);

      throw new Error(
        error.message
      );
    }
  };


// =============================
// UPDATE APPLICATION
// =============================

const updateApplication =
  async (req, res) => {
    try {
      const application =
        await Application.findById(
          req.params.id
        );

      if (!application) {
        res.status(404);

        throw new Error(
          "Application not found"
        );
      }

      application.companyName =
        req.body.companyName ||
        application.companyName;

      application.role =
        req.body.role ||
        application.role;

      application.status =
        req.body.status ||
        application.status;

      application.location =
        req.body.location ||
        application.location;

      application.jobDescription =
        req.body.jobDescription ||
        application.jobDescription;

      // ==========================
      // REGENERATE ATS DATA
      // ==========================

      application.skills =
        extractKeywords(
          application.jobDescription
        );

      application.atsScore =
        Math.floor(
          Math.random() *
            40
        ) + 60;

      const updatedApplication =
        await application.save();

      res.json(
        updatedApplication
      );
    } catch (error) {
      res.status(500);

      throw new Error(
        error.message
      );
    }
  };


// =============================
// DELETE APPLICATION
// =============================

const deleteApplication =
  async (req, res) => {
    try {
      const application =
        await Application.findById(
          req.params.id
        );

      if (!application) {
        res.status(404);

        throw new Error(
          "Application not found"
        );
      }

      await application.deleteOne();

      res.json({
        message:
          "Application removed",
      });
    } catch (error) {
      res.status(500);

      throw new Error(
        error.message
      );
    }
  };

module.exports = {
  getApplications,

  createApplication,

  updateApplication,

  deleteApplication,
};