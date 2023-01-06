import React from "react";
import styles from "/Users/musicjoeyoung/Desktop/Coding/Javascript/NextJS/website/styles/contact.module.css";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <div className={styles.container}>
        <h3>Questions? Comments?</h3>
        <a href="mailto:musicjoeyoung@gmail.com">Email me!</a>
      </div>
    </div>
  );
};

export default Contact;
