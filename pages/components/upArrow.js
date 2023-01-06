import React, { useEffect, useState } from "react";
import styles from "/Users/musicjoeyoung/Desktop/Coding/Javascript/NextJS/website/styles/upArrow.module.css";

const UpArrow = () => {
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
          <img src="../images/UpIconArrow.png" className={styles.img} />
          <h4>Float up!</h4>
        </div>
      )}
    </div>
  );
};
export default UpArrow;
