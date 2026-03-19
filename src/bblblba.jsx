import { useReducer, useState } from "react";

const initialTasks = [
  { id: 1, text: "Vizitează Muzeul Kioto", done: true },
  { id: 2, text: "Cumpără suveniruri", done: false },
  { id: 3, text: "Plimbă-te prin Gion", done: false },
];

// Toată logica de state într-un singur loc
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [...tasks, { id: action.id, text: action.text, done: false }];
    case "toggled":
      return tasks.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t,
      );
    case "deleted":
      return tasks.filter((t) => t.id !== action.id);
    default:
      throw Error("Acțiune necunoscută: " + action.type);
  }
}

let nextId = 4;

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text.trim()) return;
    dispatch({ type: "added", id: nextId++, text });
    setText("");
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📋 Lista de task-uri</h2>
      <div style={styles.inputRow}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Adaugă un task nou..."
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addBtn}>
          Adaugă
        </button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.item}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => dispatch({ type: "toggled", id: task.id })}
              style={styles.checkbox}
            />
            <span
              style={{
                ...styles.text,
                textDecoration: task.done ? "line-through" : "none",
                opacity: task.done ? 0.5 : 1,
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => dispatch({ type: "deleted", id: task.id })}
              style={styles.deleteBtn}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      <p style={styles.counter}>
        {tasks.filter((t) => !t.done).length} task-uri rămase
      </p>
    </div>
  );
}

const styles = {
  container: { padding: "20px", fontFamily: "sans-serif", maxWidth: "460px" },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "14px",
    color: "#059669",
  },
  inputRow: { display: "flex", gap: "8px", marginBottom: "14px" },
  input: {
    flex: 1,
    padding: "8px 12px",
    border: "1px solid #cbd5e1",
    borderRadius: "6px",
    fontSize: "14px",
  },
  addBtn: {
    padding: "8px 16px",
    background: "#059669",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
  list: { listStyle: "none", padding: 0, margin: 0 },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 12px",
    marginBottom: "8px",
    background: "#f0fdf4",
    borderRadius: "8px",
    border: "1px solid #bbf7d0",
  },
  checkbox: {
    width: "16px",
    height: "16px",
    cursor: "pointer",
    accentColor: "#059669",
  },
  text: { flex: 1, fontSize: "14px", color: "#334155" },
  deleteBtn: {
    padding: "3px 8px",
    background: "#fee2e2",
    color: "#ef4444",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
  },
  counter: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#94a3b8",
    textAlign: "right",
  },
};
