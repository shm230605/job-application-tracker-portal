import { useState } from "react";

const AddNote = ({
  addHandler,
}) => {
  const [text, setText] =
    useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    addHandler(text);

    setText("");
  };

  return (
    <form
      onSubmit={
        submitHandler
      }
      className="mb-5"
    >
      <textarea
        rows="4"
        placeholder="Write notes..."
        value={text}
        onChange={(e) =>
          setText(
            e.target.value
          )
        }
        className="w-full bg-slate-800 p-4 rounded-xl"
      />

      <button className="bg-indigo-500 px-4 py-2 rounded mt-3">
        Add Note
      </button>
    </form>
  );
};

export default AddNote;