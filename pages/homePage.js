import styles from "../styles/homePage.module.css";
import HamburgerMenu from "./components/HamburgerMenu";
import UpArrow from "./components/UpArrow.js";
import Contact from "./components/Contact.js";
import Link from "next/link";
import Image from "next/image";
//import Calculator from "./components/calculator/Calculator";

const homePage = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/favicon.ico" alt="JY logo" width={50} height={50} />
            </Link>
            <title>Joseph Young</title>
          </div>
          {/* NavBar */}
          <div className={styles.navLinks}>
            <ol className={styles.ol}>
              <li className={styles.li}>
                <Link href="/" className={styles.glowOnHover}>
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
                <Link href="#resume" className={styles.glowOnHover}>
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
      <div className={styles.main}>
        <h2 className={styles.welcome}>Hello, my name is </h2>
        <h1 className={styles.welcome} style={{ fontSize: "60px" }}>
          Joseph Young{" "}
        </h1>
        <p className={styles.welcome}>
          I’m a software engineer specializing in building and testing
          exceptional digital experiences. Scroll down to learn a little more
          about me!
        </p>
      </div>
      <div className={styles.parallax}></div>
      {/* Bio */}
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
          <p className={styles.bioP}>
            As a software engineer and graduate of the Fullstack Academy
            Software Engineering Immersive program, I love to problem-solve,
            design, debug, test, and build various types of applications.
            I&apos;m passionate about learning and implementing web
            accessibility standards into everything I do.
            <br />
            <br />
            I have helped build and deploy efficient and user-friendly marketing
            campaigns for hundreds of major companies, a performance marketing
            channel that delivers one-to-one messages across email and text at
            an unmatched scale.
            <br />
            <br />I have also collaborated on both e-commerce websites with full
            user-authorization structures and attractive user interface, as well
            as interactive, multi-user web spaces with polished front-end
            designs.
          </p>
        </div>
      </div>
      <div className={styles.parallax2}></div>
      {/* Tech */}
      <div className={styles.testDiv2}>
        Languages and Tools I use:
        <div className={styles.iconContainer}>
          {/*  <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt=""
            width={60}
            height={60}
          />
          <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            alt=""
            width={60}
            height={60}
          />
          <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            alt=""
            width={60}
            height={60}
          />
          <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt=""
            width={60}
            height={60}
          />
          <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt=""
            width={60}
            height={60}
          />
          <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
            alt=""
            width={60}
            height={60}
          />
          <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt=""
            width={60}
            height={60}
          />
          <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt=""
            width={60}
            height={60}
          />
          <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
            alt=""
            width={60}
            height={60}
          />
          <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            alt=""
            width={60}
            height={60}
          />
          <Image
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
            alt=""
            width={60}
            height={60}
          /> */}
        </div>
      </div>
      <div className={styles.parallax3}></div>
      {/* Projects */}
      <div className={styles.testDiv3} id="projects">
        <h2>Weather App</h2>
        <div className={styles.projectImgContainer}>
          <Image
            className={styles.projectImg}
            src="/images/WeatherApp.png"
            alt="Picture of the project"
            width={500}
            height={300}
          />
        </div>
        <p>
          Built within this website, this weather app makes use of the
          OpenWeather API.
        </p>
        <div className={styles.links}>
          <Link
            href="https://github.com/musicjoeyoung/MyWebsite/tree/main/pages/components/weather"
            className={styles.glowOnHover}
            style={{ color: "black" }}
          >
            Github
          </Link>
        </div>

        <div className={styles.links}>
          <Link
            href="/components/weather/weather"
            className={styles.glowOnHover}
            style={{ color: "black" }}
          >
            Click here to view
          </Link>
        </div>
      </div>
      <div className={styles.parallax4}></div>
      <div className={styles.testDiv4}>
        <h2>Aether</h2>
        <div className={styles.projectImgContainer}>
          <Image
            className={styles.projectImg}
            src="/images/Aether.png"
            alt="Picture of the project"
            width={500}
            height={500}
          />
        </div>
        <p>
          Built as a final capstone project at the Fullstack Academy, this is an
          audio-visual music collaboration experience. Our goal was to create a
          loosely structured audio visual “jam” space for users to compose and
          visualize music with a variety of instruments collaboratively in a
          live session. When collaborative art cannot be made in-person, this
          application can bring people together in a creative environment. This
          space serves as a tool to make music in a live 3-D session.
          <br />
          <br />
          Tech used: Three.js, Tone.js, Socket.io, Firebase/Firestore, React,
          Redux, Express, Framer/Framer-Motion
        </p>
        <div className={styles.links}>
          <Link
            href="https://github.com/musicjoeyoung/aether"
            className={styles.glowOnHover}
          >
            Github
          </Link>
          {/*           <Link
            href="https://aether-leo.herokuapp.com/sesh"
            className={styles.glowOnHover}
          >
            Click here to view
          </Link> */}
        </div>
      </div>
      <div className={styles.parallax5}></div>
      <div className={styles.testDiv5}>
        <h2>Music Memory</h2>
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
          A hackathon challenge by Mintbean.io with a short turnaround, my goal
          was to make a game that tests the user&apos;s ability to remember and
          playback different arrangements of pitches and also strengthen their
          tonal and visual memory.
        </p>
        <div className={styles.links}>
          <Link
            href="https://github.com/musicjoeyoung/MusicMemoryGame"
            className={styles.glowOnHover}
          >
            Github
          </Link>
          <Link
            href="https://musicjoeyoung.medium.com/music-memory-game-4238a4bb1c35"
            className={styles.glowOnHover}
          >
            Medium Article
          </Link>
          {/*          <Link
            href="https://music-memory-game.herokuapp.com/"
            className={styles.glowOnHover}
          >
            Click here to view
          </Link> */}
        </div>
      </div>
      <div className={styles.parallax6}></div>
      {/* Resume */}
      <div className={styles.testDiv6} id="resume">
        <h2>Resume</h2>

        <h3>Experience</h3>
        <ul className={styles.ul}>
          <li>
            Wunderkind – Software Engineer - 2022-2023
            <ul>
              <li>
                Successfully integrated internal platform with client campaigns
                with vanilla JavaScript and in-house tools while writing
                maintainable, reliable, scalable, and testable code.
              </li>
              <li>
                Maintained existing APIs and built out new functionality to
                communicate efficiently with clients.
              </li>
              <li>
                Reviewed for peers as well assisted in assessment of tools and
                resources for web accessibility implementation.
              </li>
              <li>
                Utilized and improved proficiency in JavaScript, HTML, CSS, and
                jQuery by creating and implementing elegant user-facing
                campaigns for hundreds of well-known web services.
              </li>
            </ul>
          </li>
          <li>
            New York Public Radio - Front Office Administration/Production
            Assistant - 2017-2022
            <ul>
              <li>
                Maintained security and conducted administrative tasks at the
                reception desk
              </li>
              <li>
                Assisted in preparation and production of scripts and content
                for WQXR’s Carnegie Hall Live broadcasts.
              </li>
            </ul>
          </li>
          <li>
            US Army, Reserves - Soldier/Executive Officer/Musician/Webmaster -
            2004-current
            <ul>
              <li>
                Serves as a Warrant Officer, responsible for management and
                well-being of a 50+ person team in all aspects related to HR,
                finance, and training.
              </li>
              <li>
                Program, produces, and musically performs 100+ community and
                training events in the tri-state area.
              </li>
              <li>
                Builds, develops, and maintains the 78th Army Band website in
                order to provide a tool for the civilian community to connect
                and access the unit’s social media resources.
              </li>
            </ul>
          </li>
        </ul>
        <h3>Education</h3>
        <ul>
          <li>
            Fullstack Academy - Software Engineering Immersive program - 2021
          </li>
          <li>Hunter College - MA, Music Composition - 2019</li>
          <li>
            Ball State University - Bachelor of Arts, Emphasis in Music
            Education - 2014
          </li>
        </ul>

        <div className={styles.links}>
          <Link
            href="https://www.linkedin.com/in/joseph-m-young/"
            className={styles.glowOnHover}
            /* style={{ color: "black" }} */
          >
            You may also find my resume information at LinkedIn.
          </Link>
        </div>
      </div>
      <div className={styles.parallax7}></div>
      {/* Contact */}
      <div className={styles.testDiv7} id="contact">
        <Contact />
      </div>
      <div className={styles.parallax8}></div>
      <div className={styles.testDiv8}>Thanks for visiting!</div>
      <UpArrow />
    </>
  );
};

export default homePage;
