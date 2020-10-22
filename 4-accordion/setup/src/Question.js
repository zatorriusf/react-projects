import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, info, title }) => {
  const [viewInfo, setViewInfo] = useState(false);
  return (
    <article className="question">
      <header>
  {title} <button className="btn" onClick={() => {setViewInfo(!viewInfo)}}>{viewInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
      {viewInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
