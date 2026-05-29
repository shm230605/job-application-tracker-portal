import API from "../api/axios";

export const getNotes =
  async () => {
    const response =
      await API.get("/notes");

    return response.data;
  };

export const createNote =
  async (data) => {
    const response =
      await API.post(
        "/notes",
        data
      );

    return response.data;
  };