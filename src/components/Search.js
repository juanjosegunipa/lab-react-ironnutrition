import { Divider, Input } from 'antd';


function Search(props) {

    const newSearch = (event) => {
        let filtered = props.myFoodArray.filter(e => {
            return e.name.toLowerCase().includes(event.target.value.toLowerCase())
        });
        props.setMyFilteredFoodArray(filtered);
    }

    return (
        <div>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input type="text" onChange={newSearch} />
        </div>
    );
}

export default Search;
