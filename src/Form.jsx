import { useReducer } from "react";

const initialUsers = { nume: "", varsta: "" };

function formReducer(users, action) {
  switch (action.type) {
    case "SCHIMBA_NUME":
      return { ...users, nume: action.nume };
    case "SCHIMBA_VARSTA":
      return { ...users, varsta: action.varsta };
    default:
      throw Error("Acțiune necunoscută: " + action.type);
  }
}

function Form() {
  const [users, dispatch] = useReducer(formReducer, initialUsers);

  function handleName(name) {
    dispatch({ type: "SCHIMBA_NUME", nume: name });
  }

  function handleAge(age) {
    dispatch({ type: "SCHIMBA_VARSTA", varsta: age });
  }
  return (
    <>
      <form>
        <input
          placeholder="Nume..."
          style={{ marginRight: "10px" }}
          onChange={(e) => handleName(e.target.value)}
        />
        <input
          placeholder="Varsta..."
          onChange={(e) => handleAge(e.target.value)}
        />
      </form>
      {console.log(users)}
    </>
  );
}

export default Form;
