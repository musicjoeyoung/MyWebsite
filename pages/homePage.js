import styles from "../styles/homePage.module.css";
import HamburgerMenu from "./components/HamburgerMenu";
import UpArrow from "./UpArrow.js";
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
              <Image src="/favicon.png" alt="JY logo" width={50} height={50} />
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
            I am a software engineer with multiple years of experience coding,
            debugging, testing, and troubleshooting in application development
            processes. I work primarily in Javascript with HTML5, CSS3, React,
            Redux, Node, Express, Sequelize, PostgreSQL, Babel, Webpack, OAuth,
            and have a special interest in Web Accessiblity.
            <br />
            <br />I design and manage websites for a number of clients. In
            addition to graduating from Fullstack Academy&#39;s Intensive
            Immersion program, I have also earned certifications in Data Science
            with Python from MIT via EdX.org.
            <br />
            <br />
            Fun Fact: I am also in the Army Reserves where I am an Executive
            Officer for a military band, and we play lots of wonderful music!
          </p>
        </div>
        <h3>Languages and Tools I use:</h3>
        <div className={styles.iconContainer}>
          <Image
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
          />
        </div>
      </div>

      {/* Tech */}

      <div className={styles.parallax3}></div>
      {/* Projects */}

      <div className={styles.testDiv4} id="projects">
        <h2>Select Projects</h2>

        <div>
          <h3>Aether</h3>
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
            Built as a final capstone project at the Fullstack Academy, this is
            an audio-visual music collaboration experience. Our goal was to
            create a loosely structured audio visual “jam” space for users to
            compose and visualize music with a variety of instruments
            collaboratively in a live session. When collaborative art cannot be
            made in-person, this application can bring people together in a
            creative environment. This space serves as a tool to make music in a
            live 3-D session.
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
      </div>
      <div className={styles.parallax4}></div>
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
      </div>

      <div className={styles.parallax5}></div>

      {/* Resume */}
      <div className={styles.testDiv5} id="resume">
        <h2>Resume</h2>

        <h3>Experience</h3>
        <ul className={styles.ul}>
          <li>
            Wunderkind – Software Engineer - Jan 2022 - Jan 2023
            <ul>
              <li>
                Successfully integrated internal platform with client campaigns
                with vanilla JavaScript and in-house tools while writing
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
                Utilized JavaScript, HTML, CSS, and jQuery to create efficient
                and userfriendly marketing campaigns for hundreds of major
                companies
              </li>
            </ul>
          </li>
          <li>
            Freelance Web Designer & Manager - Mar 2020 - current
            <ul>
              <li>
                Design and maintain various websites for clients using
                Javascript, React, HTML, and CSS
              </li>
            </ul>
          </li>
          <li>
            US Army, Reserves - Web Designer & Manager - Nov 2004 - current
            <ul>
              <li>
                Website Manager - Designs and maintains website for the 78th
                Army Reserves Band using Javascript, React, HTML and CSS
              </li>
              <li>
                Serves as a Warrant Officer, responsible for the management and
                wellbeing of a 50+ person team in all aspects related to HR,
                finance, and training
              </li>
              <li>
                Programs, produces, and performs at 100+ community and training
                events in the tri-state area
              </li>
            </ul>
          </li>
        </ul>
        <h3>Education</h3>
        <ul>
          <li>
            Fullstack Academy - Certification, Software Engineering - Feb 2021
          </li>
          <li>Hunter College - MA, Music Composition - Jun 2019</li>
          <li>Ball State University - BA, Music Education - Jun 2014</li>
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
      <div className={styles.parallax6}></div>

      {/* Contact */}
      <div className={styles.testDiv6} id="contact">
        <Contact />
      </div>

      <UpArrow />
    </>
  );
};

export default homePage;
