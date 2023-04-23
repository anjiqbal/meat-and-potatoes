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
      className="listItem"
      onClick={() => {
        onClick();
        setShowIngredients(!showIngredients);
        setShowRecipe(!showRecipe);
      }}
    >
      <h3>{recipeName}</h3>
      <img src={imgUrl} alt="a meal" />
      <div className="instructions">
        {showIngredients && (
          <ul className="ingredientsList">
            {ingredients.map((ingredient) => {
              return (
                <li className="ingredientItem" key={ingredient}>
                  {ingredient}
                </li>
              );
            })}
          </ul>
        )}
        {showInstructions && showRecipe && <p>{instructions}</p>}
      </div>
    </li>
  );
}

export default ListItem;
