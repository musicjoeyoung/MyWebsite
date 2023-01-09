import styles from "../styles/404.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <h1 className={styles.h1}>
        Sorry! It looks like this page doesn't exist! Click{" "}
        <Link className={styles.a} href="/">
          here
        </Link>{" "}
        to go back home!
      </h1>
    </>
  );
}
