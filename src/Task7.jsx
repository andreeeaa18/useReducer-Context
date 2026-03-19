import { useReducer } from "react";

const initialDataLoading = { loading: false, date: null, eroare: null };

function dataReducer(dataLoading, action) {
  switch (action.type) {
    case "INCEPE_INCARCAREA":
      return { ...dataLoading, loading: true, date: null, eroare: null };
    case "INCARCARE_SUCCES":
      return {
        ...dataLoading,
        loading: false,
        date: action.payload,
        eroare: null,
      };
    default:
      throw Error("Acțiune necunoscută: " + action.type);
  }
}

function Task7() {
  const [dataLoading, dispatch] = useReducer(dataReducer, initialDataLoading);

  function handleBringData() {
    dispatch({ type: "INCEPE_INCARCAREA" });

    setTimeout(() => {
      dispatch({
        type: "INCARCARE_SUCCES",
        payload: "Datele au fost încărcate cu succes!",
      });
    }, 2000);
  }

  return (
    <>
      <button onClick={handleBringData}>Adu datele</button>
      {dataLoading.loading && <p>Se încarcă...</p>}
      {dataLoading.date && <p>{dataLoading.date}</p>}
    </>
  );
}

export default Task7;
