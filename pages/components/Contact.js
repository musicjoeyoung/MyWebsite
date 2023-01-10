import React from "react";
import styles from "/styles/contact.module.css";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <div className={styles.container}>
        <h3>Thanks for visiting!</h3>
        <Link
          href="mailto:joseph.m.young2@gmail.com"
          className={styles.glowOnHover}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Contact;
