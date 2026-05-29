import { useState } from "react";

import toast from "react-hot-toast";

import {
  uploadResume,
} from "../../services/uploadService";

const ResumeUpload = ({
  fetchResumes,
}) => {
  const [file, setFile] =
    useState(null);

  const submitHandler =
    async (e) => {
      e.preventDefault();

      if (!file) {
        return toast.error(
          "Select file"
        );
      }

      const formData =
        new FormData();

      formData.append(
        "resume",
        file
      );

      try {
        await uploadResume(
          formData
        );

        toast.success(
          "Resume Uploaded"
        );

        fetchResumes();
      } catch (error) {
        toast.error(
          "Upload Failed"
        );
      }
    };

  return (
    <form
      onSubmit={
        submitHandler
      }
      className="bg-slate-800 p-5 rounded-xl mb-5"
    >
      <h2 className="text-xl font-bold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
        className="mb-4"
      />

      <button className="bg-indigo-500 px-4 py-2 rounded">
        Upload
      </button>
    </form>
  );
};

export default ResumeUpload;