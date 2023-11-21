import styles from "./Hero.module.scss"


const Hero = () => {
    return (
        <main className={styles.main}>
            {/* <h2 className={styles.welcome}>Hello, my name is </h2> */}
            <h1 className={styles.welcome} style={{ fontSize: "60px" }}>
                Joseph Young{" "}
            </h1>
            <p className={styles.welcome}>
                Software engineer specializing in building and testing exceptional
                digital experiences. Scroll down to learn more.
            </p>
        </main>
    )
}

export default Hero