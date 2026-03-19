import { useReducer } from "react";
const initialNumber = 0;

function actionsReducer(number, action) {
  switch (action.type) {
    case "increment":
      return number + 1;
    case "decrement":
      return number - 1;
    case "reset":
      return (number = 0);
    default:
      throw Error("Acțiune necunoscută: " + action.type);
  }
}
function Counter() {
  const [number, dispatch] = useReducer(actionsReducer, initialNumber);

  function handleIncrement() {
    dispatch({ type: "increment" });
  }

  function handleDecrement() {
    dispatch({ type: "decrement" });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <>
      <h1>{number}</h1>
      <button style={{ marginRight: "10px" }} onClick={handleIncrement}>
        Adauga
      </button>
      <button style={{ marginRight: "10px" }} onClick={handleDecrement}>
        Scade
      </button>
      <button style={{ marginRight: "10px" }} onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default Counter;
