import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [itemInput, setItemInput] = useState("");
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items'))||[]);
  const [itemToEdit, setItemToEdit] = useState();
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleAlert = (show=false,msg='',type ='') => {
    setAlert({show,msg,type});
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!itemToEdit) {
      try {
        const newItemObject = {
          id: +new Date(),
          item: itemInput,
        };
        const newItemArray = [...items, newItemObject];
        setItems(newItemArray);
        handleAlert(
          true,
          `${itemInput} added to the list`,
          "success"
        );
        setItemInput("");
      } catch (error) {
        console.error(error);
      }
    }
    if (itemToEdit) {
      try {
        let newItemsArray = [...items];
        const editedItemIndex = items.findIndex(
          (item) => item.id === itemToEdit.id
        );
        newItemsArray[editedItemIndex].item = itemInput;
        setItems(newItemsArray);
        handleAlert(true,`Value changed`,"success");
        setItemInput("");
        setItemToEdit();
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleEdit = (id) => {
    try {
      const itemToEdit = items.filter((item) => item.id === id)[0];
      const text = itemToEdit.item;
      setItemToEdit(itemToEdit);
      setItemInput(text);
    } catch (error) {
      console.error(error);
    }
  };
  const handleRemove = (id) => {
    const newItemArray = items.filter((item) => item.id !== id);
    setItems(newItemArray);
    handleAlert(true, `${itemInput} removed`,"danger");
  };
  const handleClearAll = () => {
    handleAlert(true,  `list cleared`,  "danger" );
    setItems([]);
  };
  useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(items))
  },[items]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={handleAlert}/>}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={itemInput}
            onChange={(evt) => setItemInput(evt.target.value)}
          />
          <button type="submit" className="submit-btn">
            {itemToEdit ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <List
        items={items}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
        handleClearAll={handleClearAll}
        
      />
    </section>
  );
}

export default App;
