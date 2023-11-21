import styles from "./Header.module.scss"
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/images/faviconCompress.png"
                            alt="JY logo"
                            width={50}
                            height={50}
                        />
                    </Link>
                    <title>Joseph Young</title>
                </div>
                {/* NavBar */}
                <div className={styles.navLinks}>
                    <ol className={styles.ol}>
                        <li className={styles.li}>
                            <Link href="/homePage" className={styles.glowOnHover}>
                                Home
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="#bio" className={styles.glowOnHover}>
                                About
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="#projects" className={styles.glowOnHover}>
                                Projects
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="#experience" className={styles.glowOnHover}>
                                Experience
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link
                                href="/images/JosephYoung_Resume_FrontEndDeveloper.pdf"
                                className={styles.glowOnHover}
                                target="_blank"
                            >
                                Resume
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="#contact" className={styles.glowOnHover}>
                                Contact
                            </Link>
                        </li>
                    </ol>
                </div>
            </nav>
            <HamburgerMenu />
        </header>
    )
}

export default Header