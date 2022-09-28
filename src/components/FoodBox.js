import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import food from '../foods.json'

function FoodBox(props) {
    // console.log(props);
    const { name, calories, image, servings } = props.food

    return (
        <Col>
            <Card

                title={props.food.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={image} height={60} alt="food" />
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                    <b>Total Calories: {calories * servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => {
                    console.log(name)
                    props.deleteFood(name)
                }}>
                    Delete </Button>
            </Card>
        </Col>
    );
}

export default FoodBox;