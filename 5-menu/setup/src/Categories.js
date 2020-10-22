import React from "react";

const Categories = ({categoryList,setFilter}) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => setFilter("all")}>All</button>
      {categoryList.map(category => <button key={category} className="filter-btn" onClick={() => setFilter(category)}>{category}</button>)}
    </div>
  );
};

export default Categories;
