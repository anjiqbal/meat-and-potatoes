import { useState } from "react";

export default function Input({ getIngredient }) {
  const [ingredient, setIngredient] = useState("");

  function handleIngredient(event) {
    setIngredient(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      getIngredient(ingredient);
      setIngredient("");
    }
  }
  function handleClick(event) {
    event.preventDefault();
    getIngredient(ingredient);
    setIngredient("");
  }

  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        value={ingredient}
        placeholder="Enter ingredient..."
        onChange={(event) => {
          handleIngredient(event);
        }}
        onKeyDown={handleKeyDown}
      />
      <button type={"submit"}>Search</button>
    </form>
  );
}
