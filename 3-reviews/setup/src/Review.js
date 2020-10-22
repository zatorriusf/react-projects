import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const { image, job, name, text } = people[reviewIndex];
  const prevReview = () => {
    const newIndex = reviewIndex === 0 ? people.length - 1 : reviewIndex - 1;
    setReviewIndex(newIndex);
  };
  const nextReview = () => {
    const newIndex = reviewIndex === people.length - 1 ? 0 : reviewIndex + 1;
    setReviewIndex(newIndex);
  };
  const randomReview = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    while (newIndex === reviewIndex) {
      newIndex = Math.floor(Math.random() * people.length);
    }
    setReviewIndex(newIndex);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-continer">
        <button className="prev-btn" onClick={prevReview}><FaChevronLeft /></button>
        <button className="random-btn" onClick={randomReview}>Suprise Me</button>
        <button className="next-btn" onClick={nextReview}><FaChevronRight /></button>
      </div>
    </article>
  );
};

export default Review;
