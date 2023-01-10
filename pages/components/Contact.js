import React from "react";
import styles from "/styles/contact.module.css";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <div className={styles.container}>
        <h3>Thanks for visiting!</h3>
        <h3>Please reach out to say hello.</h3>

        <div className={styles.iconContainer}>
          <a
            href="https://www.linkedin.com/in/joseph-m-young/"
            className={styles.glowOnHover}
          >
            <Image
              className={styles.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt=""
              width={60}
              height={60}
            />
          </a>
          <a
            href="https://github.com/musicjoeyoung"
            className={styles.glowOnHover}
          >
            <Image
              className={styles.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt=""
              width={60}
              height={60}
            />
          </a>
          <a
            href="mailto:joseph.m.young2@gmail.com"
            className={styles.glowOnHover}
          >
            <Image
              className={styles.email}
              src="/images/email.png"
              alt=""
              width={60}
              height={60}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
