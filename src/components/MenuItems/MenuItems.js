import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import { useState } from "react";
import "./MenuItems.css";

const MenuItems = (props) => {
  const data = props.data;

  const [menu, setMenu] = useState(data);

  const handleAll = () => {
    const items = data.filter((element, index) => {
      return element;
    });
    setMenu(items);
  };

  const handleCategory = (cat) => {
    const items = data.filter((element, index) => {
      return element.category === cat;
    })
    setMenu(items);
  }

  console.log(menu);

  /**
   * Prvobitno sam ovo probao pa sam skontao da je to usustini jedna funkcija
   */
  /* const handleBreakfast = () => {
    const items = data.filter((element, index) => {
      return element.category === "breakfast";
    });
    setMenu(items);
  };

  const handleLunch = () => {
    const items = data.filter((element, index) => {
      return element.category === "lunch";
    });
    setMenu(items);
  };

  const handleShakes = () => {
    const items = data.filter((element, index) => {
      return element.category === "shakes";
    });
    setMenu(items);
  }; */



  return (
    <div className="menu-items">
      <div className="button-group flex">
        <button onClick={handleAll}>All</button>
        <button onClick={() => handleCategory("breakfast")}>Breakfast</button>
        <button onClick={() => handleCategory("lunch")}>Lunch</button>
        <button onClick={() => handleCategory("shakes")}>Shakes</button>

      </div>
      <MenuItem menu={menu} />
    </div>
  );
};

export default MenuItems;
