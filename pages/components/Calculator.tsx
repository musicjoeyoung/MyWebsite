import { useState } from "react";
import styles from "../../styles/calculator.module.scss";

const Calculator: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const handleClick = (value: string) => {
    setResult(result + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  const handleSqrt = () => {
    try {
      setResult(Math.sqrt(eval(result)).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handlePow = () => {
    setResult(result + "**");
  };

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h1>Calculator</h1>
        <p>This is a basic calculator built using TypeScript</p>
      </div>
      <div className={styles.calculator}>
        <input
          type="text"
          value={result}
          disabled
          className={styles.calculator__input}
        />
        <div className={styles.calculator__row}>
          <button
            onClick={() => handleClick("7")}
            className={styles.calculator__button}
          >
            7
          </button>
          <button
            onClick={() => handleClick("8")}
            className={styles.calculator__button}
          >
            8
          </button>
          <button
            onClick={() => handleClick("9")}
            className={styles.calculator__button}
          >
            9
          </button>
          <button
            onClick={() => handleClick("+")}
            className={
              styles.calculator__button /* calculator__button--operator */
            }
          >
            +
          </button>
        </div>
        <div className={styles.calculator__row}>
          <button
            onClick={() => handleClick("4")}
            className={styles.calculator__button}
          >
            4
          </button>
          <button
            onClick={() => handleClick("5")}
            className={styles.calculator__button}
          >
            5
          </button>
          <button
            onClick={() => handleClick("6")}
            className={styles.calculator__button}
          >
            6
          </button>
          <button
            onClick={() => handleClick("-")}
            className={
              styles.calculator__button /* calculator__button--operator */
            }
          >
            -
          </button>
        </div>
        <div className={styles.calculator__row}>
          <button
            onClick={() => handleClick("1")}
            className={styles.calculator__button}
          >
            1
          </button>
          <button
            onClick={() => handleClick("2")}
            className={styles.calculator__button}
          >
            2
          </button>
          <button
            onClick={() => handleClick("3")}
            className={styles.calculator__button}
          >
            3
          </button>
          <button
            onClick={() => handleClick("*")}
            className={
              styles.calculator__button /* calculator__button--operator */
            }
          >
            x
          </button>
        </div>
        <div className={styles.calculator__row}>
          <button
            onClick={() => handleClick("0")}
            className={styles.calculator__button}
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className={styles.calculator__button}
          >
            .
          </button>
          <button onClick={calculate} className={styles.calculator__button}>
            =
          </button>

          <button
            onClick={() => handleClick("/")}
            className={
              styles.calculator__button /* styles.calculator__button--operator */
            }
          >
            ÷
          </button>
        </div>
        <div className={styles.calculator__row}>
          <button
            onClick={handleSqrt}
            className={
              styles.calculator__button /* calculator__button--operator */
            }
          >
            √
          </button>
          <button
            onClick={handlePow}
            className={
              styles.calculator__button /* calculator__button--operator */
            }
          >
            ^
          </button>
          <button onClick={clear} className={styles.calculator__button}>
            C
          </button>
        </div>
      </div>
      <div className={styles.answerContainer}>
        <h2 className={styles.answerContainer__answer}>{result}</h2>
      </div>
    </div>
  );
};

export default Calculator;
