import { useState } from "react";

const ApplicationModal = ({
  onClose,
  onSave,
}) => {
  const [formData, setFormData] =
    useState({
      companyName: "",
      role: "",
      status: "Applied",
      location: "",
    });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="bg-slate-800 p-8 rounded-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-5">
          Add Application
        </h2>

        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          onChange={changeHandler}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          onChange={changeHandler}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <select
          name="status"
          onChange={changeHandler}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        >
          <option>
            Applied
          </option>

          <option>
            OA
          </option>

          <option>
            Interview
          </option>

          <option>
            Offer
          </option>

          <option>
            Rejected
          </option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={changeHandler}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <div className="flex gap-3">
          <button className="bg-indigo-500 px-4 py-2 rounded w-full">
            Save
          </button>

          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 px-4 py-2 rounded w-full"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationModal;