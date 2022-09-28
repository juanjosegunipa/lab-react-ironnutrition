import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'



function App() {

  const [myFoodArray, setMyFoodArray] = useState(foods);
  const [myFilteredFoodArray, setMyFilteredFoodArray] = useState(foods);

  const addNewFood = (newFoodObject) => {
    setMyFoodArray([...myFoodArray, newFoodObject])
    setMyFilteredFoodArray([...myFoodArray, newFoodObject])
  }

  // const createNewSearch = (setMySearch) => {

  // }

  function deleteFood(deletedName) {
    const filteredArray = myFoodArray.filter(e => {
      return e.name !== deletedName
    })
    setMyFoodArray(filteredArray)
    setMyFilteredFoodArray(filteredArray)
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addNewFood={addNewFood} />
      <Search setMyFilteredFoodArray={setMyFilteredFoodArray} myFoodArray={myFoodArray} />
      <Row>
        {
          myFilteredFoodArray.map(e => {
            return (
              <FoodBox key={e.name} food={e} deleteFood={deleteFood} />
            );
          })
        }
      </Row>
    </div>
  );
}

export default App;
