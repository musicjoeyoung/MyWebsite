import React, { useEffect, useState } from "react";
import styles from "styles/upArrow.module.css";
import Image from "next/image";

const UpArrow = ({darkMode}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className={styles.scrollToTop}>
      {isVisible && (
        <div onClick={scrollToTop} className={styles.upContainer}>
          <Image
            src={`${darkMode ? '/images/arrow4.png' : '/images/arrowBlack.png'}`}
            className={styles.img}
            alt="Scroll up arrow"
            width={60}
            height={60}
          />
        </div>
      )}
    </div>
  );
};
export default UpArrow;
