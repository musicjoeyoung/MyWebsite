import { useState } from "react"
import styles from "../styles/homePage.module.css";
import HamburgerMenu from "./components/HamburgerMenu";
import UpArrow from "./components/UpArrow.js";
import Contact from "./components/Contact.js";
import Link from "next/link";
import Image from "next/image";
import NightModeButton from "./components/NightModeButton";


const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <>
      <header className={`${styles.header} ${darkMode ? "" : styles.dayMode}`}>
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
            {/* <NightModeButton/> */}
            {/* <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button> */}
          </div>
          {/* NavBar */}
          <div className={styles.navLinks}>
            <ol className={styles.ol}>
              <li className={styles.li}>
                <Link href="/homePage" className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}>
                  Home
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#bio" className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}>
                  About
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#projects" className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}>
                  Projects
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#experience" className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}>
                  Experience
                </Link>
              </li>
              <li className={styles.li}>
                <Link
                  href="/images/JosephYoung_Resume_FrontEndDeveloper.pdf"
                  className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#contact" className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}>
                  Contact
                </Link>
              </li>
            </ol>
          </div>
        </nav>
        <HamburgerMenu />
        <Image src="/images/day-and-night.png" alt="icon" width={30} height={30} className={styles.nightDayIcon} onClick={() => setDarkMode(!darkMode)} />
      </header>
      <div className={`${styles.main} ${darkMode ? "" : styles.dayMode}`}>
        {/* <h2 className={styles.welcome}>Hello, my name is </h2> */}
        <h1 className={styles.welcome} style={{ fontSize: "60px" }}>
          Joseph Young{" "}
        </h1>
        <p className={styles.welcome}>
          Software engineer specializing in building and testing exceptional
          digital experiences. Scroll down to learn more.
        </p>
      </div>
      <div className={styles.parallax}></div>
      {/* Bio */}
      <div className={`${styles.testDiv} ${darkMode ? "" : styles.dayMode}`} id="bio">
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
              processes. I work primarily in Javascript with HTML, CSS, SASS, React,
              Redux, Node, Express, PostgreSQL, MySQL and have a special interest in
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
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                alt="SASS"
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
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
                width={60}
                height={60}
              />
              <Image
                className={styles.icon}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
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
              <Image
                className={styles.icon}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tech */}

      <div className={styles.parallax}></div>
      {/* Projects */}

      <div className={`${styles.testDiv4} ${darkMode ? "" : styles.dayMode}`} id="projects">
        <h2>Select Projects</h2>
        <div>
          <h3>CodeCards</h3>
          <div className={styles.projectImgContainer}>
            <Image
              className={styles.projectImg}
              src="/images/CodeCards.png"
              alt="Picture of the project"
              width={500}
              height={500}
            />
          </div>
          <p>
            A flashcard study tool for learning JavaScript! This is a fullstack application using a MySQL database.
          </p>
          <div className={styles.links}>
            <Link
              href={"https://sensational-pegasus-16a760.netlify.app/"}
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              CodeCards
            </Link>
            <Link
              href="https://github.com/musicjoeyoung/Flashcards"
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.testDiv4} ${darkMode ? "" : styles.dayMode}`} id="projects">
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
              href={"/components/Weather"}
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Weather App
            </Link>
            <Link
              href="https://github.com/musicjoeyoung/MyWebsite/blob/main/pages/components/Weather.js"
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.parallax2}></div>
      {/* Music Memory */}
      <div className={`${styles.testDiv2} ${darkMode ? "" : styles.dayMode}`}>
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
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Music Memory
            </Link>
            <Link
              href="https://github.com/musicjoeyoung/MusicMemoryGame"
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Github
            </Link>
            <Link
              href="https://musicjoeyoung.medium.com/music-memory-game-4238a4bb1c35"
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Medium
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.parallax2}></div>
      {/* Weather App */}


      {/* <div className={styles.parallax2}></div> */}
      {/* CRUD App */}
      <div className={`${styles.testDiv3} ${darkMode ? "" : styles.dayMode}`}>
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
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              CRUD App
            </Link>
            <Link
              href="https://github.com/musicjoeyoung/MERN"
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.parallax2}></div>
      {/* Seasonle */}
      <div className={`${styles.testDiv2} ${darkMode ? "" : styles.dayMode}`}>
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
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Seasonle
            </Link>
            <Link
              href="https://github.com/musicjoeyoung/Seasonle-Game"
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.parallax2}></div>

      {/* Countdown Timer */}
      <div className={`${styles.testDiv2} ${darkMode ? "" : styles.dayMode}`}>
        <div>
          <h3>Countdown Timer</h3>
          <div className={styles.projectImgContainer}>
            <Image
              className={styles.projectImg}
              src="/images/countdownTimer.png"
              alt="Picture of the project"
              width={500}
              height={500}
            />
          </div>
          <p>A simple, animated countdown timer</p>
          <div className={styles.links}>
            <Link
              href="/components/CountdownTimer"
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Countdown Timer
            </Link>
            <Link
              href="https://github.com/musicjoeyoung/MyWebsite/blob/main/pages/components/CountdownTimer.js"
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.parallax2}></div>

      {/* Countdown Timer */}
      <div className={`${styles.testDiv2} ${darkMode ? "" : styles.dayMode}`}>
        <div>
          <h3>Countdown Timer</h3>
          <div className={styles.projectImgContainer}>
            <Image
              className={styles.projectImg}
              src="/images/calculator.png"
              alt="Picture of the project"
              width={500}
              height={500}
            />
          </div>
          <p>A basic calculator built with Typescript</p>
          <div className={styles.links}>
            <Link
              href="/components/Calculator"
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Calculator
            </Link>
            <Link
              href="https://github.com/musicjoeyoung/MyWebsite/blob/main/pages/components/Calculator.tsx"
              className={`${styles.glowOnHover} ${darkMode ? "" : styles.dayMode}`}
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
      {/* Experience */}
      <div className={`${styles.testDiv5} ${darkMode ? "" : styles.dayMode}`} id="experience">
        <h2>Relevant Experience</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Associate Educator, Software Engineering - BrainStation - New York,
            NY - March 2023 - current
            <ul>
              <li>
                Delivers lectures and mentors the next wave of engineering
                talent by providing expert technical guidance to students who
                are building exciting projects using the most cutting-edge
                technologies.
              </li>
              <li>
                Works on writing and researching new content to teach the most
                up-to-date skills in development to students.
              </li>
            </ul>
          </li>
          <li className={styles.li}>
            Software Engineer - Wunderkind – New York, NY - Jan 2022 - Jan 2023
            <ul>
              <li>
                Successfully integrated internal platform with client campaigns
                with vanilla Javascript and in-house tools while writing
                maintainable, reliable, scalable, and testable code
              </li>
              <li>
                Built out new functionality and maintained existing APIs to
                ensure code is clean and efficient
              </li>
              <li>
                Reviewed code for peers and assessed tools and resources for web
                accessibility implementation
              </li>
              <li>
                Utilized Javascript, HTML, CSS, and jQuery to create efficient
                and user-friendly marketing campaigns for hundreds of major
                companies
              </li>
            </ul>
          </li>
          <li className={styles.li}>
            Freelance Web Designer & Manager - New York, NY - Mar 2020 - current
            <ul>
              <li>
                Designs, builds, and maintains various websites for clients
                using Javascript, React, HTML, and CSS
              </li>
            </ul>
          </li>
          <li className={styles.li}>
            Web Designer & Manager - US Army, Reserves - Nov 2004 - current
            <ul>
              <li>
                Website Manager - Designs, builds, and maintains website for the
                78th Army Reserves Band using Javascript, React, HTML and CSS
              </li>
              <li>
                Serves as a Warrant Officer, responsible for the management and
                well-being of a 50+ person team in all aspects related to HR,
                finance, and training
              </li>
              <li>
                Programs, produces, and performs at 100+ community and training
                events in the tri-state area
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.parallax}></div>

      {/* Contact */}
      <div className={`${styles.testDiv6} ${darkMode ? "" : styles.dayMode}`} id="contact">
        <Contact darkMode={darkMode} />
      </div>


      <UpArrow darkMode={darkMode} />
    </>
  );
};

export default HomePage;
