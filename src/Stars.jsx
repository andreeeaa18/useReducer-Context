import { useReducer } from "react";

const initialStars = { hoverIndex: 0, setIndex: 0 };

function hoverStars(stars, action) {
  switch (action.type) {
    case "hover":
      return { ...stars, hoverIndex: action.hoverIndex };
    case "click":
      return { ...stars, setIndex: action.hoverIndex };
    case "leave":
      return { ...stars, hoverIndex: 0 };
    default:
      throw Error("Acțiune necunoscută: " + action.type);
  }
}

function Stars() {
  const [stars, dispatch] = useReducer(hoverStars, initialStars);

  const starArray = [1, 2, 3, 4, 5];

  function handleHover(starIndex) {
    dispatch({ type: "hover", hoverIndex: starIndex });
  }

  function handleClick(starIndex) {
    dispatch({ type: "click", hoverIndex: starIndex });
  }

  function handleLeave() {
    dispatch({ type: "leave" });
  }

  return (
    <>
      {starArray.map((starIndex) => (
        <span
          key={starIndex}
          style={{
            color:
              starIndex <=
              (stars.hoverIndex > 0 ? stars.hoverIndex : stars.setIndex)
                ? "orange"
                : "gray",
            fontSize: "40px",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleHover(starIndex)}
          onMouseLeave={handleLeave}
          onClick={() => handleClick(starIndex)}
        >
          &#x2605;
        </span>
      ))}
    </>
  );
}

export default Stars;
