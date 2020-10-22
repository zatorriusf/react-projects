import React from "react";

const Menu = ({ filteredItems }) => {
  return (
    <section className="section-center">
      {filteredItems.map((item) => {
        const { desc,id,img, price, title } = item;
        return <article className="menu-item" key={id}>
          <img src={img} alt={title} className="photo" />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
      <p className="price">{price}</p>
            </header>
      <p className="item-text">{desc}</p>
          </div>
        </article>
      })}
    </section>
  );
};

export default Menu;
