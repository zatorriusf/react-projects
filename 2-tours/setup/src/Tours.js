import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour,fetchTours}) => {
  if(tours.length === 0){
    return <section>
      <div className="title"><h2>No Tours Left</h2>
    <button className="btn" onClick={() => fetchTours()}>Refresh</button></div>
    
    </section>
  }
  return <section>
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      
      {tours.map(tour => {
        console.log(tour);
      return (<Tour key={tour.id} removeTour={removeTour} {...tour} />)
      })}
    </div>
  </section>;
};

export default Tours;
