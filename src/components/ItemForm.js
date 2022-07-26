import React, { useState } from "react";
import { v4 as uuid } from "uuid";

//5. Take onItemFormSubmit function in as a prop
function ItemForm({ onItemFormSubmit }) {
  //6. Create stateful object
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Produce",
  });

  //7. Function to set newItem to the form details
  function handleNewItem(e) {
    e.preventDefault();
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  }

  //8. function to assign ID to newItem
  function handleSubmit(e) {
    e.preventDefault();

    onItemFormSubmit({
      id: uuid(),
      ...newItem,
    });
  }

  return (
    //9. pass submission to form w/ 'onSubmit'
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newItem.name}
          //9.1 pass handleNewItem to assign the value from input to newItem object name value
          onChange={handleNewItem}
        />
      </label>

      <label>
        Category:
        {/*9.2 Pass value and change listener to form category into stateful object*/}
        <select
          name="category"
          value={newItem.category}
          onChange={handleNewItem}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
