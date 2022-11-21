import styles from "../styles/homePage.module.css";

const homePage = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="/">
              <img src={"favicon.ico"} />
            </a>
            <title>logo</title>
          </div>
          <div className={styles.navLinks}>
            <ol className={styles.ol}>
              <li className={styles.li}>
                <a href="#bio">About</a>
              </li>
              <li className={styles.li}>Projects</li>
              <li className={styles.li}>Resume</li>
              <li className={styles.li}>About</li>
              <li className={styles.li}>About</li>
            </ol>
          </div>
        </nav>
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
      <div className={styles.testDiv} id="bio">
        <h2>About Me</h2>
        <div className={styles.bio}>
          <img className={styles.bioPic} src={"/images/Joe.png"} />
          <p>
            As a software engineer and graduate of the Fullstack Academy
            Software Engineering Immersive program, I love to problem-solve,
            design, debug, test, and build various types of applications. I'm
            passionate about learning and implementing web accessibility
            standards into everything I do. <br /> <br />
            Currently, I help build and maintain ad campaigns for{" "}
            <a href="https://www.wunderkind.co/">Wunderkind</a>, a performance
            marketing channel that delivers one-to-one messages across email and
            text at an unmatched scale.
          </p>
        </div>
      </div>
      <div className={styles.parallax2}></div>
      <div className={styles.testDiv2}>
        Languages and Tools I use:
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <img
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          />
          <img
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          />
          <img
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          />
          <img
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          />
          <img
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
          />
          <img
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />
          <img
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <img
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
          />
          <img
            className={styles.icon}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
          />
        </div>
      </div>
      <div className={styles.parallax3}></div>
      <div className={styles.testDiv3}>
        <h2>Weather App</h2>
        <div className={styles.projectImgContainer}>
          <img className={styles.projectImg} src="./images/WeatherApp.png" />
        </div>
        <p>
          Built within this website, this weather app makes use of the
          OpenWeather API.
        </p>
        <a href="/weather">Click here to view.</a>
      </div>
      <div className={styles.parallax4}></div>
      <div className={styles.testDiv4}>
        <h2>Aether</h2>
        <div className={styles.projectImgContainer}>
          <img className={styles.projectImg} src="./images/Aether.png" />
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
        <a href="https://github.com/musicjoeyoung/aether">Github</a>
        <br />
        <a href="https://aether-leo.herokuapp.com/sesh">Live link</a>
      </div>
      <div className={styles.parallax5}></div>
      <div className={styles.testDiv5}>
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
      <div className={styles.parallax6}></div>
      <div className={styles.testDiv6}>
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
      <div className={styles.parallax7}></div>
      <div className={styles.testDiv7}>
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
      <div className={styles.parallax8}></div>
      <div className={styles.testDiv8}>
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
    </>
  );
};

export default homePage;
