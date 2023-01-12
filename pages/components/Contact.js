import React from "react";
import styles from "/styles/contact.module.css";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <div className={styles.container}>
        <p>
          I&#39;m always looking to collaborate on projects that improve the
          user experience and help make the world a bit better.
        </p>
        <h3 /* className={styles.h3} */ className={styles.glowOnHover}>
          <a
            href="mailto:joseph.m.young2@gmail.com"
            /* className={styles.glowOnHover} */
          >
            Reach out to say hello!
          </a>
        </h3>

        <div className={styles.iconContainer}>
          <a
            href="https://www.linkedin.com/in/joseph-m-young/"
            /* className={styles.glowOnHover} */
          >
            <Image
              className={styles.icon}
              src="/images/linkedinIcon.png"
              alt=""
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://github.com/musicjoeyoung"
            /* className={styles.glowOnHover} */
          >
            <Image
              className={styles.icon}
              src="/images/githubIcon.png"
              alt=""
              width={30}
              height={30}
            />
          </a>
          <a
            href="mailto:joseph.m.young2@gmail.com"
            /* className={styles.glowOnHover} */
          >
            <Image
              className={styles.icon}
              src="/images/emailIcon.png"
              alt=""
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
