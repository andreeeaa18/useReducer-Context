import { useReducer } from "react";
let initialSettings = [
  { id: 1, done: false },
  { id: 2, done: false },
  { id: 3, done: false },
];

function checkBoxReducer(settings, action) {
  if (action.type === "toggle") {
    return settings.map((setting) => {
      if (setting.id === action.id) {
        return { ...setting, done: !setting.done };
      }
      return setting;
    });
  }
  return settings;
}
function Settings() {
  const [settings, dispatch] = useReducer(checkBoxReducer, initialSettings);

  return (
    <>
      <label>Notificari</label>
      <input
        type="checkbox"
        style={{ marginRight: "5px" }}
        onChange={() => dispatch({ type: "toggle", id: 1 })}
      />
      <label>DarkTheme</label>
      <input
        type="checkbox"
        onChange={() => dispatch({ type: "toggle", id: 2 })}
      />
      <label>Sunet</label>
      <input
        type="checkbox"
        onChange={() => dispatch({ type: "toggle", id: 3 })}
      />
    </>
  );
}

export default Settings;
