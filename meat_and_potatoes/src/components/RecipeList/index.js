import { useState, useEffect } from "react";
import ListItem from "../ListItem";

export default function RecipeList({ recipeList }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchInstructions(id) {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setRecipeInstructions(data.meals[0].strInstructions);
      createIngredientsArray(data.meals[0]);
    }
    if (selectedRecipe) {
      fetchInstructions(selectedRecipe.id);
    }
  }, [selectedRecipe]);

  function handleClick(id) {
    setSelectedRecipe({ id });
  }
  function createIngredientsArray(recipe) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (
        recipe[`strIngredient${i}`] &&
        recipe[`strIngredient${i}`].trim() !== ""
      ) {
        ingredients.push(
          `${recipe[`strMeasure${i}`]} ${recipe[`strIngredient${i}`]}`
        );
      }
    }

    setIngredients(ingredients);
  }

  return (
    <div>
      {recipeList === null ? (
        <h2>Try another ingredient</h2>
      ) : (
        recipeList.map((recipe) => {
          const { idMeal, strMeal, strMealThumb } = recipe;
          const showInstructions =
            selectedRecipe && selectedRecipe.id === idMeal;
          return (
            <ListItem
              key={idMeal}
              recipeName={strMeal}
              showInstructions={showInstructions}
              instructions={recipeInstructions}
              imgUrl={strMealThumb}
              ingredients={ingredients}
              onClick={() => {
                handleClick(idMeal);
              }}
            />
          );
        })
      )}
    </div>
  );
}
