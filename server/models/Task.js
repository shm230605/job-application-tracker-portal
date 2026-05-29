const mongoose =
  require("mongoose");

const taskSchema =
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

      title: {
        type: String,
      },

      dueDate: {
        type: Date,
      },

      reminder: {
        type: Boolean,

        default: true,
      },

      completed: {
        type: Boolean,

        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Task",
    taskSchema
  );