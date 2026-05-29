const mongoose =
  require("mongoose");

const resumeSchema =
  mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",
      },

      application: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "Application",
      },

      resumeUrl: {
        type: String,
      },

      fileName: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Resume",
    resumeSchema
  );