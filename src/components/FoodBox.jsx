import { Card, Col, Divider, Button } from "antd";

export default function FoodBox(props){
    
    const {name, image, calories, servings} = props.food
    const index = props.index
    return (
        <Col>
            <Card title={name}
                style={{ width: 230, height: 300, margin: 10 }}
  >
                <img src={image} height={60} alt={name} />
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                  <b>Total Calories: {calories} * {servings} </b> kcal
                </p>
                <Button onClick={()=>props.deleteFood(index)} type="primary"> Delete </Button>
            </Card>
        </Col>
     )
}