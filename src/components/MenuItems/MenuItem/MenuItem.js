import React from "react";

const MenuItem = (props) => {
  // const { id, title, category, price, img, desc }
  const menuArr = props.menu;
  console.log(menuArr);

  return (
    <div>
      {menuArr.map((menu, index) => {
        const { id, title, category, price, img, desc } = menu;
        let description = desc.replace(/`/g, "");
        return (
          <div key={id}>
            <div>{id}</div>
            <div>{title}</div>
            <div>{category}</div>
            <div>{price}</div>
            <div>{img}</div>
            <div>{description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItem;
