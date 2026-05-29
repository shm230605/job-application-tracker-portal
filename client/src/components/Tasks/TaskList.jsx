import {
  useState,
} from "react";

const TaskList = () => {
  const [tasks, setTasks] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const addTask = () => {
    if (!title) return;

    setTasks([
      ...tasks,

      {
        title,

        completed: false,
      },
    ]);

    setTitle("");
  };

  const toggleTask =
    (index) => {
      const updated =
        [...tasks];

      updated[index]
        .completed =
        !updated[index]
          .completed;

      setTasks(updated);
    };

  return (
    <div className="bg-slate-800 p-5 rounded-2xl">
      
      <h2 className="text-xl font-semibold mb-4">
        Task Manager
      </h2>

      <div className="space-y-3">
        {tasks.map(
          (
            task,
            index
          ) => (
            <div
              key={index}
              className="flex justify-between items-center bg-slate-700 p-3 rounded-xl"
            >
              <span
                className={`${
                  task.completed
                    ? "line-through text-slate-400"
                    : ""
                }`}
              >
                {
                  task.title
                }
              </span>

              <button
                onClick={() =>
                  toggleTask(
                    index
                  )
                }
                className="bg-green-500 px-3 py-1 rounded-lg"
              >
                Done
              </button>
            </div>
          )
        )}
      </div>

      <div className="flex gap-3 mt-5">
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          placeholder="Add Task"
          className="flex-1 bg-slate-700 p-3 rounded-xl outline-none"
        />

        <button
          onClick={addTask}
          className="bg-indigo-500 px-5 rounded-xl"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskList;