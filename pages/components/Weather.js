import React, { useState } from "react";
import axios from "axios";
import styles from "/Users/musicjoeyoung/Desktop/Coding/Javascript/NextJS/website/styles/weather.module.css";
import Image from "next/image";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const API_KEY = "your_api_key_here";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
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
      <p style={{ marginTop: "-55px" }}>
        Enter a city name to find the weather!
      </p>
      <div className={styles.container}>
        <p>{`${fullDate}`}</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Enter a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
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
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                width={70}
                height={70}
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
