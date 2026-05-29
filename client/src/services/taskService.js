import API from "../api/axios";

export const getTasks =
  async () => {
    const response =
      await API.get("/tasks");

    return response.data;
  };

export const createTask =
  async (data) => {
    const response =
      await API.post(
        "/tasks",
        data
      );

    return response.data;
  };

export const updateTask =
  async (id) => {
    const response =
      await API.put(
        `/tasks/${id}`
      );

    return response.data;
  };