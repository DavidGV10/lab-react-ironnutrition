import { Input } from "antd";
import { useState } from "react";

export default function Search(props){
    const [food, setFood] = useState("")
    
    function handleInput(event){
       setFood(event.target.value)
       props.filterFood(event.target.value)
    }

    return (
        <div>
            <label htmlFor="search">Search</label>
            <Input name="search" type="text" onChange={handleInput} value={food}/>
        </div>
    )
}