const express = require("express");

const router = express.Router();

const {
  getTasks,
  createTask,
  updateTask,
} = require("../controllers/taskController");

const {
  protect,
} = require("../middleware/authMiddleware");

router
  .route("/")
  .get(protect, getTasks)
  .post(protect, createTask);

router.put(
  "/:id",
  protect,
  updateTask
);

module.exports = router;