import styles from "../styles/404.module.css";

export default function Custom404() {
  return (
    <>
      <h1 className={styles.h1}>
        Sorry! It looks like this page doesn't exist! Click{" "}
        <a className={styles.a} href="/">
          here
        </a>{" "}
        to go back home!
      </h1>
    </>
  );
}
