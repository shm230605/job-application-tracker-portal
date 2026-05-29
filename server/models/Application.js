const mongoose =
  require("mongoose");

const applicationSchema =
  mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",
      },

      companyName: {
        type: String,
        required: true,
      },

      role: {
        type: String,
        required: true,
      },

      status: {
        type: String,

        default:
          "Applied",
      },

      location: {
        type: String,
      },

      // ======================
      // ATS FEATURE
      // ======================

      jobDescription: {
        type: String,
      },

      skills: [
        {
          type: String,
        },
      ],

      atsScore: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Application",
    applicationSchema
  );