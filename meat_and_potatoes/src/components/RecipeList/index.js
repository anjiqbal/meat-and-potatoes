import ListItem from "../ListItem";

export default function RecipeList({ recipeList }) {
  return (
    <div>
      {recipeList === null ? (
        <h2>Try another ingredient</h2>
      ) : (
        recipeList.map((recipe) => {
          return <ListItem recipe={recipe} />;
        })
      )}
    </div>
  );
}
