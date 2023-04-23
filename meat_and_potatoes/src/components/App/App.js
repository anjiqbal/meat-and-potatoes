import "./App.css";
import Input from "../Input";
import RecipeList from "../RecipeList";

import { useState, useEffect } from "react";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [ingredient, setIngredient] = useState("");

  function getIngredient(input) {
    setIngredient(input);
  }

  useEffect(() => {
    async function fetchdata() {
      if (ingredient !== "") {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await res.json();
        setRecipeList(data.meals);
      } else {
        setRecipeList([]);
      }
    }
    fetchdata();
  }, [ingredient]);

  return (
    <main className="App">
      <h1>Meat and Potatoes</h1>

      <Input getIngredient={getIngredient} />
      <RecipeList recipeList={recipeList} />
    </main>
  );
}

export default App;
