import axios from "axios";
import { useState } from "react";
import ShowWeather from "/Users/musicjoeyoung/Desktop/Coding/Javascript/NextJS/website/pages/components/weather/ShowWeather.js";
import styles from "/Users/musicjoeyoung/Desktop/Coding/Javascript/NextJS/website/styles/weather.module.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCity("");
    setLoading(false);
  };
  return (
    <>
      <div className={styles.main}>
        <form onSubmit={fetchWeather} className={styles.form}>
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Search by City"
              className={styles.input}
              autoComplete="on"
            />
          </div>
          <button onClick={fetchWeather}>Search</button>
        </form>
        {weather.main && <ShowWeather data={weather} />}
      </div>
    </>
  );
};

export default Weather;
