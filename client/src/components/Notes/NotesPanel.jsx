import {
  useState,
} from "react";

const NotesPanel = () => {
  const [notes, setNotes] =
    useState([]);

  const [text, setText] =
    useState("");

  const addNote = () => {
    if (!text) return;

    setNotes([
      ...notes,

      {
        content: text,
      },
    ]);

    setText("");
  };

  return (
    <div className="bg-slate-800 p-5 rounded-2xl">
      
      <h2 className="text-xl font-semibold mb-4">
        Notes
      </h2>

      <div className="space-y-3">
        {notes.map(
          (
            note,
            index
          ) => (
            <div
              key={index}
              className="bg-slate-700 p-3 rounded-xl"
            >
              {
                note.content
              }
            </div>
          )
        )}
      </div>

      <textarea
        value={text}
        onChange={(e) =>
          setText(
            e.target.value
          )
        }
        placeholder="Write notes..."
        className="w-full mt-4 bg-slate-700 p-3 rounded-xl outline-none"
      />

      <button
        onClick={addNote}
        className="mt-3 bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-xl"
      >
        Add Note
      </button>
    </div>
  );
};

export default NotesPanel;