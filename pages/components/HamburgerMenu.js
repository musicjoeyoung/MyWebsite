import styles from "/styles/HamburgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";

const HamburgerMenu = () => {
  return (
    <div className={styles.hamburgerMenu}>
      <Image
        src="/images/dropdown.png"
        className={styles.dropdownbtn}
        alt=""
        width={35}
        height={35}
      />
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
