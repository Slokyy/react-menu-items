import React from "react";
import "./MenuItem.css";

const MenuItem = (props) => {
  // const { id, title, category, price, img, desc }
  const menuArr = props.menu;
  console.log(menuArr);

  return (
    <div className="menu-items grid">
      {menuArr.map((menu, index) => {
        const { id, title, category, price, img, desc } = menu;
        let description = desc.replace(/`/g, "");
        let priceRound = "$" + Math.ceil(price)
        return (
          <div key={id} className="menu-item grid">
            <img src={img} className="menu-item-img" alt={title} />
            <div className="menu-item-info">
              <div className="title-price flex">{title} <span>{priceRound}</span></div>
              <div className="menu-item-desc">{description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItem;
