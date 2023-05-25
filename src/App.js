/*Shopping list where users can add new items to the list that they'd like to get from the store and delete items from the list*/
import logo from './logo1.png';
import './App.css';
import { useState } from "react";

function App() {
  
  //itmes should be obtained as an array and supplied as an argument to the useState function
  const [items, setItems] = useState([]);

  //delete any item using the filter function
  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  //typing values into a form input and then retrieving those values when the form is submitted,using the onSubmit event handler 
  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;

    //add new items to an array in our local state using the array spread operator
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }
  return (
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
      <h1>Shopping List</h1>
        <div className="shopping-list">
          <h2>Items To Buy</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="item"
              placeholder="Add a new item"
              required
            />
            <button>Add</button>
          </form>
          <ul>
            {items.map((item, index) => (
              <Item 
              onRemoveItem={onRemoveItem} key={item + index} item={item}
              />
            ))}
          </ul>
        </div>
      </div>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <li onClick={clickHandler}>
      {item}
      <button className="delete" onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  );
}

const clickHandler = (event) => {
  if(event.detail === 2){
    event.target.style.setProperty('text-decoration', 'line-through');
    //console.log("Double Clicked")
  }
}


export default App
