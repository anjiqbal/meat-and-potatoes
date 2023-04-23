import { useState } from "react";

function ListItem({
  recipeName,
  imgUrl,
  onClick,
  showInstructions,
  instructions,
  ingredients,
}) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  return (
    <li
      onClick={() => {
        onClick();
        setShowIngredients(!showIngredients);
        setShowRecipe(!showRecipe);
      }}
    >
      <h3>{recipeName}</h3>
      <img src={imgUrl} alt="a meal" />
      {showInstructions && showRecipe && <p>{instructions}</p>}

      {showIngredients && (
        <ul>
          {ingredients.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
        </ul>
      )}
    </li>
  );
}

export default ListItem;
