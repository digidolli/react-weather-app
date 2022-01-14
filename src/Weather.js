import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
    
    const [weatherData, setWeatherData] = useState ({ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: "Tuesday 9am Friday",
            humidity: response.data.main.humidity,
            details: response.data.weather[0].description,
            icon: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
            iconAlt: "hello",

        });
    };


    if(weatherData.ready){
        return(
        <div className="Weather">
            <div className="weather-app">
                <form id="search-bar" >
                    <input  type="search" name="City Search" placeholder="Please enter a city..."  autoComplete="off" id="city-search" />
                    <input type="submit" value="🔎" id="search-city-button" />
                </form>
                <div className="currentForecast row">
                    <div className="cityHeading">
                        <h1 className="place text-capitalize" id="place"> {weatherData.city}</h1>
                        <h1 className="day text-capitalize" >{weatherData.date}<span id="day"> </span></h1>
                    </div>
                    <div className="col-6 firstCol">
                        <img src={weatherData.icon} alt={weatherData.iconAlt} className="icon-cloudy" id="icon" />
                    </div>
                    <div className="col-6 secondCol">
                        <ul>
                            <li className="currentTemp" id="temp"> {Math.round(weatherData.temp)}º
                            </li>
                        </ul>
                    </div>
                    <h1 className="weatherDetails text-capitalize" id="weatherDetails">{weatherData.details}</h1>
                    <p>
                    <strong>Humidity: <span id="humidity">{weatherData.humidity}</span> </strong> <strong>%</strong>
                    <strong>| Wind: <span id="wind">{weatherData.wind}</span> Km/H</strong>
                    </p>
                    <div className="upcomingForecast row " id="upcomingForecast"></div>
                    </div>
                </div>
            </div>   
    );
    } else {
            const apiKey = "faa5a241d5c428a14c3417782b47bc2d";  
            let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
            axios.get(apiURL).then(handleResponse);
            return ("loading...");
    }
}