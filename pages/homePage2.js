import styles from "../styles/homePage2.module.css";
import Link from "next/link";

const homePage2 = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>musician</h1>
        Ideas: Have this page be one of those scrolling pages with pictures as
        background (different than the software engineering part?)
        <Link href="/">Home</Link>
      </div>
    </>
  );
};

export default homePage2;
