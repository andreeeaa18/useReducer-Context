import { useReducer } from "react";
import { useState } from "react";

const initialSold = 100;

function soldReducer(sold, action) {
  switch (action.type) {
    case "add":
      return (sold += action.sold);
    case "withdraw":
      if (action.sold <= 0) {
        return "Sold insuficient";
      } else {
        return (sold -= action.sold);
      }
    default:
      throw Error("Acțiune necunoscută: " + action.type);
  }
}

function CurrentSold() {
  const [sold, dispatch] = useReducer(soldReducer, initialSold);
  const [inputSold, setInputSold] = useState("");

  function handleAdd(inputSold) {
    dispatch({ type: "add", sold: Number(inputSold) });
    setInputSold("");
  }
  function handleWithdraw(inputSold) {
    dispatch({ type: "withdraw", sold: Number(inputSold) });
    setInputSold("");
  }

  return (
    <>
      <h1>Sold curent: {sold}</h1>
      <input
        onChange={(e) => setInputSold(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button
        onClick={(e) => handleAdd(Number(inputSold))}
        style={{ marginRight: "10px" }}
      >
        Depunere
      </button>
      <button onClick={(e) => handleWithdraw(Number(inputSold))}>
        Retragere
      </button>
    </>
  );
}

export default CurrentSold;
