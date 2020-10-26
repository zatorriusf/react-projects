import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, handleEdit, handleRemove, handleClearAll }) => {
  if (items.length === 0) {
    return <></>;
  }
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {items.map((item) => {
          return (
            <article key={item.id} className="grocery-item">
              <p className="title">{item.item}</p>
              <div className="btn-container">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(item.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <button className="clear-btn" onClick={() => handleClearAll()}>
        Clear Items
      </button>
    </div>
  );
};

export default List;
