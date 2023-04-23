function ListItem({ recipe }) {
  return (
    <li>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt="a meal" />
    </li>
  );
}

export default ListItem;
