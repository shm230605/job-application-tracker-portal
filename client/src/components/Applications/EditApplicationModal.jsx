import { useState } from "react";

const EditApplicationModal = ({
  application,
  onClose,
  onUpdate,
}) => {
  const [formData, setFormData] =
    useState({
      companyName:
        application.companyName,
      role: application.role,
      status:
        application.status,
      location:
        application.location,
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

    onUpdate(
      application._id,
      formData
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="bg-slate-800 p-8 rounded-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-5">
          Edit Application
        </h2>

        <input
          type="text"
          name="companyName"
          value={
            formData.companyName
          }
          onChange={changeHandler}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={changeHandler}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <select
          name="status"
          value={formData.status}
          onChange={changeHandler}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        >
          <option>
            Applied
          </option>

          <option>OA</option>

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
          value={
            formData.location
          }
          onChange={changeHandler}
          className="w-full p-3 mb-4 rounded bg-slate-700"
        />

        <div className="flex gap-3">
          <button className="bg-indigo-500 px-4 py-2 rounded w-full">
            Update
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

export default EditApplicationModal;