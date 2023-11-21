import styles from "./Bio.module.scss"
import Image from "next/image";

const Bio = () => {
    return (
        <div className={styles.testDiv} id="bio">
            <h2>About Me</h2>
            <div className={styles.bio}>
                <Image
                    className={styles.bioPic}
                    src="/images/Joe.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
                <div>
                    <p className={styles.bioP}>
                        I am a software engineer with multiple years of experience coding,
                        debugging, testing, and troubleshooting in application development
                        processes. I work primarily in Javascript with HTML, CSS, React,
                        Redux, Node, Express, PostgreSQL, and have a special interest in
                        Web Accessibility.
                        <br />
                        <br />I design, build, and manage websites for a number of
                        clients. In addition to graduating from Fullstack Academy&#39;s
                        Intensive Immersion program, I have also earned certifications in
                        Data Science with Python from MIT via EdX.org.
                        <br />
                        <br />
                        Fun Fact: I am also in the Army Reserves where I am an Executive
                        Officer for a military band, and we play lots of wonderful music!
                    </p>
                    <div className={styles.iconContainer}>
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="Javscript"
                            width={60}
                            height={60}
                        />
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                            alt="HTML5"
                            width={60}
                            height={60}
                        />
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                            alt="CSS3"
                            width={60}
                            height={60}
                        />
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            alt="React JS"
                            width={60}
                            height={60}
                        />
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                            alt="Next JS"
                            width={60}
                            height={60}
                        />
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
                            alt="Canva"
                            width={60}
                            height={60}
                        />
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                            alt="Express"
                            width={60}
                            height={60}
                        />
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node JS"
                            width={60}
                            height={60}
                        />
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                            alt="PostgreSQL"
                            width={60}
                            height={60}
                        />
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                            alt="Python"
                            width={60}
                            height={60}
                        />
                        <Image
                            className={styles.icon}
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                            alt="jQuery"
                            width={60}
                            height={60}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio