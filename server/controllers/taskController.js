const Task =
  require("../models/Task");

const getTasks =
  async (req, res) => {
    const tasks =
      await Task.find({
        user: req.user._id,
      }).sort({
        createdAt: -1,
      });

    res.json(tasks);
  };

const createTask =
  async (req, res) => {
    const {
      title,
      dueDate,
    } = req.body;

    const task =
      await Task.create({
        user: req.user._id,
        title,
        dueDate,
      });

    res.status(201).json(
      task
    );
  };

const updateTask =
  async (req, res) => {
    const task =
      await Task.findById(
        req.params.id
      );

    if (!task) {
      res.status(404);

      throw new Error(
        "Task not found"
      );
    }

    task.completed =
      !task.completed;

    const updatedTask =
      await task.save();

    res.json(updatedTask);
  };

module.exports = {
  getTasks,
  createTask,
  updateTask,
};