import React, { useState } from "react";
import axios from "axios";
import styles from "styles/weather.module.css";
import Image from "next/image";

const Weather = () => {
  //const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const [zipCode, setZipCode] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    try {
      const { data } = await axios.get(url);
      setWeather(data);
    } catch (err) {
      console.error(err);
    }
  };

  const d = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = weekday[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  const fullDate = day + ", " + month + " " + date + ", " + year;

  return (
    <div className={styles.main}>
      <div>
        <p style={{ marginTop: "-55px" }}>
          Enter a zip code name to find the weather!
        </p>
      </div>
      <div className={styles.container}>
        <p>{`${fullDate}`}</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Enter a zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className={styles.input}
          />
          <button type="submit">Get Weather</button>
        </form>
        {weather ? (
          <div>
            <div
              style={{
                display: "flex",
              }}
            >
              <h2>Weather in {weather.name}</h2>
              <Image
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                width={70}
                height={70}
                style={{ content: "" }}
                loading="eager"
              />
            </div>
            <p>Temperature: {weather.main.temp.toFixed(0)}</p>
            <p>Description: {weather.weather[0].description}</p>
            <p>Feels like: {weather.main.feels_like.toFixed(0)}</p>
            <p>Actual temperature: {weather.main.temp.toFixed(0)}</p>
            <p>High of: {weather.main.temp_max.toFixed(0)}</p>
            <p>Low of: {weather.main.temp_min.toFixed(0)}</p>
            <p>Humidity: {weather.main.humidity.toFixed(0)}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Weather;
