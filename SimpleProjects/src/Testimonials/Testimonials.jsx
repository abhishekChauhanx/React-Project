import React, { useState } from "react";
import "./test.css";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  function handlePrev() {
    // setCurrentIndex(prev => prev ===0 ? testimonials.length -1 :prev -1 );
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  }
  function handleNext() {
    // setCurrentIndex((prev) =>
    //   prev === testimonials.length - 1 ? 0 : prev + 1
    // );

    setCurrentIndex( (currentIndex +1)% testimonials.length)
  }
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <div className="button" onClick={handlePrev}>
          Prev
        </div>
        <div className="button" onClick={handleNext}>
          Next
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
