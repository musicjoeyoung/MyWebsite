import React from "react";
import Image from "next/image";

const ShowWeather = ({ data }) => {
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

  console.log("data from ShowWeather.js", data);

  if (data && data.name) {
    // myObject is defined and has a 'name' property, so we can safely access it
    console.log("data name", data.name);
  } else {
    // myObject is either null or undefined, or it doesn't have a 'name' property
    console.log("data.name is not defined or does not have a name");
    data.name === "New York";
  }

  return (
    <div
      style={{
        background: "#00000099",
        border: "1px solid #0000004d",
        borderRadius: "60px",
        padding: "40px",
        margin: "0 auto",
      }}
    >
      <p>{`${fullDate}`}</p>
      <div style={{ display: "flex" }}>
        <h1>Weather in {data?.name}</h1>
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt="/"
          width="100"
          height="100"
        />
      </div>
      <p>Description: {data.weather[0].description}</p>
      <p>Feels like: {data.main.feels_like.toFixed(0)}</p>
      <p>Actual temperature: {data.main.temp.toFixed(0)}</p>
      <p>High of: {data.main.temp_max.toFixed(0)}</p>
      <p>Low of: {data.main.temp_min.toFixed(0)}</p>
      <p>Humidity: {data.main.humidity.toFixed(0)}</p>
    </div>
  );
};

export default ShowWeather;
