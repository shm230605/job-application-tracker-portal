const mongoose =
  require("mongoose");

const noteSchema =
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

      content: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Note",
    noteSchema
  );