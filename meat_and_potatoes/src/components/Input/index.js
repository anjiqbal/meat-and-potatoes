import App from "../App/App";
import {useState} from "react";

export default function Input(){
    const [ingredient, setIngredient] = useState("");

    function handleIngredient(input) {
        setIngredient(input);
        console.log(ingredient);
    }
    return (
        <>
        <input type ="text" onChange={(event) => {
            handleIngredient(event.target.value)
        }}/>
        <button>Search</button>

        </>
    )
}