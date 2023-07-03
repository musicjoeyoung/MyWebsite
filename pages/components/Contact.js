import { useRef, useState } from "react";
import styles from "/styles/contact.module.scss";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import  {YOUR_SERVICE_ID ,YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY } from "../../config/config.js"

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setIsSuccess(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setIsSubmitted(true);
          setIsSuccess(false);
      });
  };

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

        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className={styles.form__input} type="text" name="user_name" />
          <label>Email</label>
          <input className={styles.form__input}type="email" name="user_email" />
          <label>Message</label>
          <textarea className={styles.form__textarea} name="message" />
          <input className={styles.form__button} type="submit" value="Send" />
        </form>

        {isSubmitted && (
          <div className={isSuccess ? styles.successMessage : styles.errorMessage}>
            {isSuccess ? "Message sent successfully!" : "Failed to send the message. Please try again."}
          </div>
        )}


        <div className={styles.iconContainer}>
          <a
            href="https://www.linkedin.com/in/joseph-m-young/"
            target="_blank"
            rel="noreferrer"
            /* className={styles.glowOnHover} */
          >
            <Image
              className={styles.icon}
              src="/images/linkedinIcon.png"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://github.com/musicjoeyoung"
            target="_blank"
            rel="noreferrer"
            /* className={styles.glowOnHover} */
          >
            <Image
              className={styles.icon}
              src="/images/githubIcon.png"
              alt="Github"
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
              alt="Email"
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
