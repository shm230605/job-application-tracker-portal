import API from "../api/axios";

export const uploadResume =
  async (formData) => {
    const response =
      await API.post(
        "/uploads",
        formData
      );

    return response.data;
  };

export const getResumes =
  async () => {
    const response =
      await API.get(
        "/uploads"
      );

    return response.data;
  };