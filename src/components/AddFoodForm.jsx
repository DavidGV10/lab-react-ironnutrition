import { Input } from "antd";
import { useState } from "react";

export default function AddFoodForm(props){
    const [formState, setFormState] = useState({})

    function handleInput(event){
        setFormState({...formState, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        props.addNewFood(formState)
        setFormState("")
    }
    return (
        <div className="addForm">
            <h4>Add Food entry</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <Input name="name" type="text" onChange={handleInput} value={formState.name || ""}/>
                                                                       
                <label htmlFor='image'>Image:</label>
                <Input name="image" type="text" onChange={handleInput} value={formState.image || ""}/>
                
                <label htmlFor='calories'>Calories:</label>
                <Input name="calories" type="text" onChange={handleInput} value={formState.calories} />

                <label htmlFor='servings' >Servings:</label>
                <Input name="servings" type="text" onChange={handleInput} value={formState.servings}/>    

                <button type="submit">Create</button>
            </form>
            
        </div>    
    )
}