import styles from "/styles/HamburgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";
//test
const HamburgerMenu = () => {
  return (
    <>
      {" "}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/faviconCompress.png"
            alt="JY logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className={styles.body}>
        <nav role="navigation">
          <div className={styles.menuToggle}>
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul className={styles.menu}>
              <li className={styles.li}>
                <Link href="/homePage" className={styles.glowOnHover}>
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
                <Link href="#experience">Experience</Link>
              </li>
              <li className={styles.li}>
                <Link
                  href="/images/JosephYoung_Resume_FrontEndDeveloper.pdf"
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
