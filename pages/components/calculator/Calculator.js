import React from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}></div>
        <div>
          <button className={styles.button}>C</button>
          <button className={styles.button}>%</button>
          <button className={styles.button}>√</button>
          <button className={styles.button}>x^2</button>
        </div>
        <div>
          <button className={styles.button}>7</button>
          <button className={styles.button}>8</button>
          <button className={styles.button}>9</button>
          <button className={styles.button}>÷</button>
        </div>
        <div>
          <button className={styles.button}>4</button>
          <button className={styles.button}>5</button>
          <button className={styles.button}>6</button>
          <button className={styles.button}>x</button>
        </div>
        <div>
          <button className={styles.button}>1</button>
          <button className={styles.button}>2</button>
          <button className={styles.button}>3</button>
          <button className={styles.button}>-</button>
        </div>
        <div>
          <button className={styles.button}>0</button>
          <button className={styles.button}>.</button>
          <button className={styles.button}>+</button>
          <button className={styles.button}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
