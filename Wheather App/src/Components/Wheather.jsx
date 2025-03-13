import "./Wheather.css";
import search_icons from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icons from "../Assets/cloud.png";
import drizzle_icons from "../Assets/drizzle.png";
import rain_icons from "../Assets/rain.png";
import snow_icons from "../Assets/snow.png";
import wind_icons from "../Assets/wind.png";
import humidity_icons from "../Assets/humidity.png";
import { useEffect, useRef, useState } from "react";

const Weather = () => {
  const [data, setData] = useState({
    humidity: "--",
    windSpeed: "--",
    temperature: "--",
    location: "Loading...",
    icon: clear_icon
  });

  const inputRef = useRef();

  const iconsList = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icons,
    "02n": cloud_icons,
    "03d": cloud_icons,
    "03n": cloud_icons,
    "04d": drizzle_icons,
    "04n": drizzle_icons,
    "09d": rain_icons,
    "09n": rain_icons,
    "10d": rain_icons,
    "10n": rain_icons,
    "13n": snow_icons,
    "13d": snow_icons
  };

  const fetchData = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;
      const res = await fetch(url);
      const result = await res.json();

      if (result.cod !== 200) {
        console.log("City not found!");
        return;
      }

      const icon = iconsList[result.weather[0].icon] || clear_icon;
      setData({
        humidity: result.main.humidity,
        windSpeed: result.wind.speed,
        temperature: result.main.temp,
        location: result.name,
        icon: icon
      });
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchData("London");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search city..." />
        <img
          src={search_icons}
          alt="Search"
          onClick={() => fetchData(inputRef.current.value)}
        />
      </div>

      <img src={data.icon} alt="Weather Icon" className="weather-icon" />
      <p className="temp">{data.temperature}°C</p>
      <p className="location">{data.location}</p>

      <div className="weather-data">
        <div className="col">
          <img src={humidity_icons} alt="Humidity Icon" />
          <div>
            <p>{data.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icons} alt="Wind Icon" />
          <div>
            <p>{data.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
