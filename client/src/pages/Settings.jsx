import { useEffect } from "react";

import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import toast from "react-hot-toast";

import TaskList from "../components/Tasks/TaskList";

import {
  getTasks,
  createTask,
  updateTask,
} from "../services/taskService";

const Settings = () => {
  const [tasks, setTasks] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [dueDate, setDueDate] =
    useState("");

  const fetchTasks =
    async () => {
      const data =
        await getTasks();

      setTasks(data);
    };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTaskHandler =
    async (e) => {
      e.preventDefault();

      await createTask({
        title,
        dueDate,
      });

      toast.success(
        "Task Added"
      );

      setTitle("");

      setDueDate("");

      fetchTasks();
    };

  const toggleTask =
    async (id) => {
      await updateTask(id);

      fetchTasks();
    };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Tasks & Reminders
      </h1>

      <form
        onSubmit={
          addTaskHandler
        }
        className="bg-slate-800 p-5 rounded-xl mb-6"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="bg-slate-700 p-3 rounded-lg"
          />

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(
                e.target.value
              )
            }
            className="bg-slate-700 p-3 rounded-lg"
          />
        </div>

        <button className="bg-indigo-500 px-5 py-2 rounded-lg mt-4">
          Add Task
        </button>
      </form>

      <TaskList
        tasks={tasks}
        toggleTask={
          toggleTask
        }
      />
    </DashboardLayout>
  );
};

export default Settings;