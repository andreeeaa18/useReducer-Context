import { useReducer } from "react";
const initialPages = { paginaCurenta: 1, totalPagini: 5 };

function pagesReducer(pages, action) {
  switch (action.type) {
    case "inapoi":
      if (pages.paginaCurenta === 1) {
        return pages;
      } else {
        return { ...pages, paginaCurenta: pages.paginaCurenta - 1 };
      }
    case "inainte":
      if (pages.paginaCurenta === pages.totalPagini) {
        return pages;
      } else {
        return { ...pages, paginaCurenta: pages.paginaCurenta + 1 };
      }
    case "sari":
      return { ...pages, paginaCurenta: action.paginaCurenta };

    default:
      throw Error("Acțiune necunoscută: " + action.type);
  }
}
function Task6() {
  const [pages, dispatch] = useReducer(pagesReducer, initialPages);

  function handleInainte() {
    dispatch({ type: "inainte" });
  }

  function handleInapoi() {
    dispatch({ type: "inapoi" });
  }

  function handleSari() {
    dispatch({ type: "sari", paginaCurenta: 5 });
  }
  return (
    <>
      <h3>{pages.paginaCurenta}</h3>
      <button style={{ marginRight: "10px" }} onClick={handleInapoi}>
        Inapoi
      </button>
      <button style={{ marginRight: "10px" }} onClick={handleInainte}>
        Inainte
      </button>

      <button onClick={handleSari}>Sari la pagina 5 </button>
    </>
  );
}
export default Task6;
