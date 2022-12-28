import styles from "/styles/HamburgerMenu.module.css";

const HamburgerMenu = () => {
  return (
    <div className={styles.hamburgerMenu}>
      <img src="./images/dropdown.png" className={styles.dropdownbtn} />
      <div className={styles.dropdownContent}>
        <li className={styles.li}>
          <a href="/" className={styles.glowOnHover}>
            Home
          </a>
        </li>
        <li className={styles.li}>
          <a href="#bio">About</a>
        </li>
        <li className={styles.li}>
          <a href="#projects">Projects</a>
        </li>
        <li className={styles.li}>
          <a>Resume</a>
        </li>
        <li className={styles.li}>
          <a>Contact</a>
        </li>
      </div>
    </div>
  );
};

export default HamburgerMenu;
