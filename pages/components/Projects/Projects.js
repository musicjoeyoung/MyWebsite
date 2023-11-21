import styles from "./Projects.module.scss"
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
    return (
        <>
            <div className={styles.testDiv4} id="projects">
                <h2>Select Projects</h2>
                <div>
                    <h3>Weather App</h3>
                    <div className={styles.projectImgContainer}>
                        <Image
                            className={styles.projectImg}
                            src="/images/weatherApp.png"
                            alt="Picture of the project"
                            width={500}
                            height={500}
                        />
                    </div>
                    <p>
                        Built within this website and using the OpenWeatherMap API, I built
                        an app to retrieve the weather for any given city.
                    </p>
                    <div className={styles.links}>
                        <Link
                            href={"/components/Weather/Weather"}
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            Weather App
                        </Link>
                        <Link
                            href="https://github.com/musicjoeyoung/MyWebsite/blob/main/pages/components/Weather.js"
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            Github
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.parallax2}></div>
            {/* Music Memory */}
            <div className={styles.testDiv2}>
                <div>
                    <h3>Music Memory</h3>
                    <div className={styles.projectImgContainer}>
                        <Image
                            className={styles.projectImg}
                            src="/images/MusicMemory.png"
                            alt="Picture of the project"
                            width={500}
                            height={500}
                        />
                    </div>
                    <p>
                        A hackathon challenge by Mintbean.io with a short turnaround, my
                        goal was to make a game that tests the ability of the user to
                        remember and playback different arrangements of pitches and also
                        strengthen their tonal and visual memory.
                    </p>
                    <div className={styles.links}>
                        <Link
                            href="https://taupe-starship-4cf747.netlify.app/"
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            Music Memory
                        </Link>
                        <Link
                            href="https://github.com/musicjoeyoung/MusicMemoryGame"
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            Github
                        </Link>
                        <Link
                            href="https://musicjoeyoung.medium.com/music-memory-game-4238a4bb1c35"
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            Medium
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.parallax2}></div>
            {/* Weather App */}

            <div className={styles.testDiv3}>
                <div>
                    <h3>CRUD App</h3>
                    <div className={styles.projectImgContainer}>
                        <Image
                            className={styles.projectImg}
                            src="/images/CRUD-MERN.png"
                            alt="Picture of the project"
                            width={500}
                            height={500}
                        />
                    </div>
                    <p>
                        Built with a MERN stack, this app demonstrates use of fullstack
                        software engineering. You can easily add and delete users, and order
                        them according to different criteria, including username, first
                        name, last name, and age. Additionally, this app allows for
                        passwords that are entered to be hashed and stored securely.
                    </p>
                    <div className={styles.links}>
                        <Link
                            href={"https://dapper-licorice-657a3f.netlify.app/"}
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            CRUD App
                        </Link>
                        <Link
                            href="https://github.com/musicjoeyoung/MERN"
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            Github
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.parallax2}></div>
            {/* Seasonle */}
            <div className={styles.testDiv2}>
                <div>
                    <h3>Seasonle</h3>
                    <div className={styles.projectImgContainer}>
                        <Image
                            className={styles.projectImg}
                            src="/images/SeasonleGame.png"
                            alt="Picture of the project"
                            width={500}
                            height={500}
                        />
                    </div>
                    <p>
                        Inspired by Wordle, this game involves guessing the correct, best
                        season out of all four seasons. 😂
                    </p>
                    <div className={styles.links}>
                        <Link
                            href="https://wonderful-ganache-6ce0a6.netlify.app/"
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            Seasonle
                        </Link>
                        <Link
                            href="https://github.com/musicjoeyoung/Seasonle-Game"
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            Github
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.parallax2}></div>

            {/* Countdown Timer */}
            <div className={styles.testDiv2}>
                <div>
                    <h3>Countdown Timer</h3>
                    <div className={styles.projectImgContainer}>
                        <Image
                            className={styles.projectImg}
                            src="/images/countdownTimer2.png"
                            alt="Picture of the project"
                            width={500}
                            height={500}
                        />
                    </div>
                    <p>A simple, animated countdown timer</p>
                    <div className={styles.links}>
                        <Link
                            href="/components/CountdownTimer/CountdownTimer"
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            Countdown Timer
                        </Link>
                        <Link
                            href="https://github.com/musicjoeyoung/MyWebsite/blob/main/pages/components/CountdownTimer.js"
                            className={styles.glowOnHover}
                            target="_blank"
                        >
                            Github
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.parallax}></div>
        </>
    )
}

export default Projects