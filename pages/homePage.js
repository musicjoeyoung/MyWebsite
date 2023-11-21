import styles from "./homePage.module.css";
import UpArrow from "./components/UpArrow/UpArrow.js";
import Contact from "./components/Contact/Contact.js";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Bio from "./components/Bio/Bio.js";
import Projects from "./components/Projects/Projects.js";
import Experience from "./components/Experience/Experience.js";
//import Calculator from "./components/calculator/Calculator";

const homePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className={styles.parallax}></div>
      <Bio />
      <div className={styles.parallax}></div>
      <Projects />
      <Experience />
      <div className={styles.parallax}></div>
      <div className={styles.testDiv6} id="contact">
        <Contact />
      </div>

      <UpArrow />
    </>
  );
};

export default homePage;
