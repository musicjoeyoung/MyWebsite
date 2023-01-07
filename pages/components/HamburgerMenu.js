import styles from "/styles/HamburgerMenu.module.css";
import Link from "next/link";

const HamburgerMenu = () => {
  return (
    <div className={styles.hamburgerMenu}>
      <img src="./images/dropdown.png" className={styles.dropdownbtn} />
      <div className={styles.dropdownContent}>
        <li className={styles.li}>
          <Link href="/" className={styles.glowOnHover}>
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="#bio">About</Link>
        </li>
        <li className={styles.li}>
          <Link href="#projects">Projects</Link>
        </li>
        <li className={styles.li}>
          <Link href="#resume">Resume</Link>
        </li>
        <li className={styles.li}>
          <Link href="#contact">Contact</Link>
        </li>
      </div>
    </div>
  );
};

export default HamburgerMenu;
