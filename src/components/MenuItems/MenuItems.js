import React from 'react'
import MenuItem from './MenuItem/MenuItem';
import { useState } from "react";

const MenuItems = (props) => {
  
  const data = props.data;
  const [menu, setMenu ] = useState(data);


  const handleAll = () => {
    const items = data.filter((element, index) => {
      return element;
    });
    setMenu(items);
  }

  const handleBreakfast = () => {
    const items = data.filter((element, index) => {
      return element.category === "breakfast";
    })
    setMenu(items)
  }

  const handleLunch = () => {
    const items =  data.filter((element, index) => {
      return element.category === "lunch";
    })
    setMenu(items);

  }

  const handleShakes = () => {
    const items = data.filter((element, index) => {
      return element.category === "shakes";
    })
    setMenu(items);
  }



  return (
    <div>
      <button onClick={handleAll}>All</button>
      <button onClick={handleBreakfast}>Breakfast</button>
      <button onClick={handleLunch}>Lunch</button>
      <button onClick={handleShakes}>Shakes</button>
      <MenuItem menu={menu}/>
    </div>
  )
}

export default MenuItems