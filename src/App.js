//import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import {useState} from "react"
import FoodBox from './components/FoodBox.jsx'
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'

function App() {

  const [foodList, setFoodList] = useState(foods)
  const [filteredFood, setFilteredFood] = useState(foods)
  const [showAddForm, setShowAddForm] = useState(true)

  function addNewFood(body){
    const newList = filteredFood.slice()
    setFilteredFood(newList.concat([body]))
  }
  function filterFood(letters){
    if(letters === "") setFilteredFood(foodList)
    else setFilteredFood(filteredFood.filter((food)=>food.name.toLowerCase().includes(letters.toLowerCase())))
  }
  function deleteFood(food){
    const index = food
    const filtered = filteredFood.filter((food)=>filteredFood.indexOf(food) !== index)
    setFilteredFood(filtered)
  }
  function toggleAddForm(){
    setShowAddForm(!showAddForm)
  } 
  console.log(filteredFood.length)
  return (
    <div className="App">
      {showAddForm && <AddFoodForm addNewFood={addNewFood}/>}
      
      <button onClick={toggleAddForm}>{showAddForm ? "Hide Form" : "Add New Food"}</button>
      <Search filterFood={filterFood}/>
      <h1>Food List</h1>
      <div className="listContainer">
      {filteredFood && filteredFood.map((el, index)=>{
        return (
          <FoodBox food={el} index={index} key={index} deleteFood={deleteFood}/>  
        )
      })}
      
      {
        filteredFood.length <= 0 && 
        <div>
          <span>Oops! There is no more content to show</span>
        </div>
      }
      </div>
    </div>
  );
}

export default App;
