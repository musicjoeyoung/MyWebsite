import Head from "next/head";
import styles from "../styles/Home.module.css";
import $ from "jquery";
import Link from "next/link";
import Image from "next/image";

let words = [
    " fullstack software engineer",
    " Javascript, jQuery, CSS, HTML",
    " pretty cool guy",
    /*  " musician, composer, performer",
    " pretty cool guy", */
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
const wordflick = () => {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 1;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substring(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

if (typeof window === "object") {
  $(document).ready(function () {
    wordflick();
  });
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joseph Young</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/faviconCompress.png" />
      </Head>
      <Image
        src={"/images/background3.jpg"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          right: 0,
          objectFit: "cover",
          display: "hidden",
        }}
        alt="background"
        width={70}
        height={70}
      />
      <main className={styles.main}>
        <div className="word"></div>
        <h1>Joseph Young</h1>
        <div className={styles.homePagesContainer}>
          <Link className={styles.glowOnHover} href="/homePage">
            Enter
          </Link>
          {/*           <a className={styles.glowOnHover} href="homePage2">
            Musician
          </a> */}
        </div>
      </main>
      <style jsx>{`
        .word {
          position: fixed;
          margin-bottom: 200px;
        }
      `}</style>
    </div>
  );
}
