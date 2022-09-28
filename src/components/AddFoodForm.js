import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {

    const [newName, setNewName] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newCalories, setNewCalories] = useState('');
    const [newServings, setNewServings] = useState('');

    const updateName = (event) => setNewName(event.target.value);
    const updateImage = (event) => setNewImage(event.target.value);
    const updateCalories = (event) => setNewCalories(event.target.value);
    const updateServings = (event) => setNewServings(event.target.value);

    const newFood = (event) => {
        event.preventDefault();

        const myNewFoodObject = {
            name: newName,
            image: newImage,
            calories: newCalories,
            servings: newServings
        };

        props.addNewFood(myNewFoodObject);
        setNewName('')
        setNewImage('')
        setNewCalories('')
        setNewServings('')
    }

    return (
        <div>
            <Divider>Add Food Entry</Divider>
            <form onSubmit={newFood}>
                <div>
                    <label>Name</label>
                    <Input
                        type="text"
                        value={newName}
                        onChange={updateName}
                    />
                </div>
                <div>
                    <label>Image</label>
                    <Input
                        type="text"
                        value={newImage}
                        onChange={updateImage}
                    />
                </div>
                <div>
                    <label>Calories</label>
                    <Input
                        type="text"
                        value={newCalories}
                        onChange={updateCalories}
                    />
                </div>
                <div>
                    <label>Servings</label>
                    <Input
                        type="text"
                        value={newServings}
                        onChange={updateServings}
                    />
                </div>
                <button>Create</button>
            </form>
        </div>
    );
}

export default AddFoodForm;