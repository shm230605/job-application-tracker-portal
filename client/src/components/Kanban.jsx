import { useState } from "react";

export default function Kanban() {
  const [columns, setColumns] = useState({
    Applied: ["Google", "Amazon"],
    Interview: ["Infosys"],
    Offer: [],
  });

  const moveItem = (item, from, to) => {
    setColumns((prev) => {
      const newState = { ...prev };

      newState[from] = newState[from].filter((i) => i !== item);
      newState[to] = [...newState[to], item];

      return newState;
    });
  };

  return (
    <div className="grid">
      {Object.keys(columns).map((col) => (
        <div key={col} className="glass">
          <h3>{col}</h3>

          {columns[col].map((item) => (
            <div
              key={item}
              className="glass"
              style={{ marginTop: 10, cursor: "pointer" }}
              onClick={() =>
                moveItem(
                  item,
                  col,
                  col === "Applied"
                    ? "Interview"
                    : col === "Interview"
                    ? "Offer"
                    : "Applied"
                )
              }
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}