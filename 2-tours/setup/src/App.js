import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.netlify.app/api/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () =>{
    setLoading(true);
    try {
      const res = await fetch(url);
    const tours = await res.json();
    setTours(tours);
    setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
  }
  const removeTour = (removedTourId) =>{
    const updatedTours = tours.filter(tour => {return tour.id !== removedTourId});
    setTours(updatedTours);
  }
  useEffect(() => {
    fetchTours();
    
  }, [])
  return (
   
    <main>
      {loading && <Loading />}
      {!loading && <Tours tours={tours} removeTour={removeTour} fetchTours={fetchTours}/>}
    </main>
  );
}

export default App;
