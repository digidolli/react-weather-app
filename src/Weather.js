import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props){
    const [city, setCity] = useState(props.defaultCity)
    const [weatherData, setWeatherData] = useState ({ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            details: response.data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            iconAlt: "hello",

        });
    };

    function search (){
        const apiKey = "faa5a241d5c428a14c3417782b47bc2d";  
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleResponse);

    }

    function handleSubmit(event){
        event.preventDefault();
        search(city);

    }

    function handleCityChange(event){
        setCity(event.target.value);
        
    }

    if(weatherData.ready){
        return(
            <div className="Weather">
                <div className="weather-app">
                    <form id="search-bar" onSubmit={handleSubmit}>
                        <input  type="search" name="City Search" placeholder="Please enter a city..."  autoComplete="off" id="city-search" onChange={handleCityChange} />
                        <input type="submit" value="🔎" id="search-city-button" />
                    </form>
                    <WeatherInfo data={weatherData} /> 
                </div>   
            </div>  
        );
        } else {
            search();
            return ("loading...");
    }
}