import { useReducer, useState } from "react";

const initialProducts = [{ id: 1, text: "Produs1" }];

function productsReducer(products, action) {
  switch (action.type) {
    case "ADAUGA_PRODUS":
      return [...products, { id: action.id, text: action.text }];
    case "STERGE_PRODUS":
      return products.filter((p) => p.id !== action.id);
    default:
      throw Error("Acțiune necunoscută: " + action.type);
  }
}
let nextId = 2;

function Task5() {
  const [products, dispatch] = useReducer(productsReducer, initialProducts);
  const [inputText, setInputText] = useState("");

  function handleAdd(inputText) {
    dispatch({ type: "ADAUGA_PRODUS", id: nextId++, text: inputText });
  }

  function handleDelete(currId) {
    dispatch({ type: "STERGE_PRODUS", id: currId });
  }
  return (
    <>
      <input
        onChange={(e) => setInputText(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={() => handleAdd(inputText)}>Adauga</button>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.text}</p>
              <button
                style={{ padding: "10px", backgroundColor: "red" }}
                onClick={() => handleDelete(product.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Task5;
