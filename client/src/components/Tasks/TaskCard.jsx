import {
  motion,
} from "framer-motion";

const TaskCard = ({
  task,
  toggleTask,
}) => {
  const isOverdue =
    new Date(task.dueDate) <
      new Date() &&
    !task.completed;

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className={`p-5 rounded-xl shadow-lg flex justify-between items-center ${
        task.completed
          ? "bg-green-700"
          : "bg-slate-800"
      }`}
    >
      <div>
        <h3 className="font-bold text-lg">
          {task.title}
        </h3>

        <p className="text-sm text-slate-300">
          Due:
          {" "}
          {new Date(
            task.dueDate
          ).toLocaleDateString()}
        </p>

        {isOverdue && (
          <span className="text-red-400 text-sm">
            Overdue
          </span>
        )}
      </div>

      <button
        onClick={() =>
          toggleTask(
            task._id
          )
        }
        className={`px-4 py-2 rounded ${
          task.completed
            ? "bg-yellow-500"
            : "bg-indigo-500"
        }`}
      >
        {task.completed
          ? "Undo"
          : "Complete"}
      </button>
    </motion.div>
  );
};

export default TaskCard;