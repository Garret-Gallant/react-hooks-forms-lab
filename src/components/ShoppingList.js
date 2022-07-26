import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

//3. Take onItemformSubmit as a prop
function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItems, setSearchItems] = useState("")

  function handleSearchChange(event) {
    setSearchItems(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  const itemsToDisplay = items
  .filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory)
    
  .filter(
    (item) => item.name.toLowerCase().includes(searchItems.toLowerCase()));


  return (
    <div className="ShoppingList">
      {/*4 Pass from app -> shoppingList -> itemForm */}
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
      searchItems={searchItems}
      onSearchChange={handleSearchChange}
      onCategoryChange={handleCategoryChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
