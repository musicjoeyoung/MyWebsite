import styles from "./404.module.scss";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__h1}>
        Sorry! It looks like this page does not exist! Click{" "}
        <Link className={styles.container__a} href="/">
          here
        </Link>{" "}
        to go back home!
      </h1>
    </div>
  );
}
