import React, { useState } from 'react';
import data from './data';
function App() {
  const [paragraphsRequested, setParagraphsRequested] = useState(0);
  const [amountValue, setAmountValue] = useState(0);
  const handleSubmit = (evt) =>{
    evt.preventDefault();
    setParagraphsRequested(amountValue);
  }
  return (
  <section className="section-center">
    <h3>Making a fake ipsum</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">Paragraphs:</label>
      <input type="number" name="amount" min="1" max={data.length.toString()} value={amountValue} onChange={evt => {setAmountValue(evt.target.value)}}/>
      <button className="btn" onClick={handleSubmit}>Generage</button>
    </form>
    {paragraphsRequested > 0 && <article className="lorem-text">
    {
      data.slice(0,paragraphsRequested).map((text,index) =>{
        return <p key={index}>{text}</p>
      })
    }
  </article>}
  </section>
  
    )
}

export default App;
