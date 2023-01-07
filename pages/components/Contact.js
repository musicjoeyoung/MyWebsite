import React from "react";
import styles from "/Users/musicjoeyoung/Desktop/Coding/Javascript/NextJS/website/styles/contact.module.css";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <div className={styles.container}>
        <h3>Questions? Comments?</h3>
        {/* <Link href="mailto:musicjoeyoung@gmail.com">Email me!</Link> */}
      </div>
    </div>
  );
};

export default Contact;
