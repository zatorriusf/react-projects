import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [slides, setSlides] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const getSlideOrder = (slideIndex) =>{
    if(slideIndex > currentIndex){
      return "nextSlide"
    }
    if(slideIndex < currentIndex){
      return "lastSlide"
    }
    return "activeSlide"
  }
  const nextSlide = () =>{
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  }
  const prevSlide = () =>{
    const prevSlide = currentIndex === 0 ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(prevSlide);
  }
  useEffect(() => {
    const slideTimer = setTimeout(()=> nextSlide(),3000)
    return () => clearTimeout(slideTimer)
  })
  return <section className="Section">
    <div className="title">
      <h2>
        <span>/</span>"reviews"
      </h2>
    </div>
    <div className="section-center">
      {slides.map((slide,index) =>{
        const {id,image,name,title,quote} = slide;
        return <article key={id} className={getSlideOrder(index)}>
          <img src={image} alt={name} className='person-img' />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>
      })}
      <button className="prev" onClick={prevSlide}><FiChevronLeft /></button>
      <button className="next" onClick={nextSlide}><FiChevronRight /></button>
    </div>
  </section>;
}

export default App;
