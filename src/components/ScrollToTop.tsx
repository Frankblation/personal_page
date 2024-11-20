import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import './ScrollToTop.css';  // Import the CSS file

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          onClick={scrollTop}
          className="scroll-to-top"  // Apply the class from CSS
        />
      )}
    </div>
  );
};

export default ScrollToTop;
