import API from "../api/axios";

export const getApplications =
  async () => {
    const response =
      await API.get(
        "/applications"
      );

    return response.data;
  };

export const createApplication =
  async (data) => {
    const response =
      await API.post(
        "/applications",
        data
      );

    return response.data;
  };

export const updateApplication =
  async (id, data) => {
    const response =
      await API.put(
        `/applications/${id}`,
        data
      );

    return response.data;
  };

export const deleteApplication =
  async (id) => {
    const response =
      await API.delete(
        `/applications/${id}`
      );

    return response.data;
  };