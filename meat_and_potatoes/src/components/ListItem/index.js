function ListItem({
  recipeName,
  imgUrl,
  onClick,
  showInstructions,
  instructions,
}) {
  return (
    <li onClick={onClick}>
      <h3>{recipeName}</h3>
      <img src={imgUrl} alt="a meal" />
      {showInstructions && <p>{instructions}</p>}
    </li>
  );
}

export default ListItem;
