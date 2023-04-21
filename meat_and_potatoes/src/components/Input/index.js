import App from "../App/App";
import { useState } from "react";

export default function Input({ getIngredient }) {
  const [ingredient, setIngredient] = useState("");

  function handleIngredient(input) {
    setIngredient(input);
  }
  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          handleIngredient(event.target.value);
        }}
      />
      <button
        onClick={() => {
          getIngredient(ingredient);
          console.log(ingredient);
        }}
      >
        Search
      </button>
    </>
  );
}
