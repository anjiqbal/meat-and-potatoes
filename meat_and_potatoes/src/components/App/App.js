import "./App.css";
import Input from "../Input";
import RecipeList from "../RecipeList"
import {useReducer, useEffect} from "react"

function App() {
useEffect(() =>{
 async function fetchdata() {
  const res = await fetch ("www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
  const data = await res.json()
  console.log(data)
} 
fetchdata()
} ,[]
)

  return <main className="App">
   <h1>Meat and Potatoes</h1>
  
  <Input/>
  <RecipeList/>



  </main>;
}

export default App;
