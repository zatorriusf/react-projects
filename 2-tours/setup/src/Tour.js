import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [fullInfo, setFullInfo] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
          
        </div>
  <p>{fullInfo ? info : `${info.substring(0,200)}...`}<button onClick={() => setFullInfo(!fullInfo)}>{fullInfo ? 'Show Less' : 'Read More'}</button></p>
        <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
