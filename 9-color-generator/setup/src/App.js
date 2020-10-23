import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [inputColor, setInputColor] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [colorList, setColorList] = useState(new Values('#e052f1').all(10));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //verify that input is a valid hex color
    try {
      let transformedColors = new Values(inputColor).all(10);
      setColorList(transformedColors);
    } catch (error) {
      setInvalidInput(true);
      console.error(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" className={invalidInput ? 'error' : null} value={inputColor} onChange={(evt)=>setInputColor(evt.target.value)} placeholder="#e052f1"/>
          <button className="btn" type="submit">Generate Colors</button>
        </form>
      </section>
      <section className="colors">
        {/*iterate over color list */
          colorList.map((color,index) =>{
            return <SingleColor key={index} {...color} index={index} />
          })}
      </section>
    </>
  );
}

export default App;
