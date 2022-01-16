import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props){
    
    let [loaded, setLoaded] = useState (false);
    let [forecastData, setForecastData] = useState (null);

    

    function handleResponse (response){
        setForecastData(response.data.daily);
        setLoaded(true);
        console.log (forecastData)
    }
     
    
    if (loaded) {
         return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay dayData={forecastData}/>
                </div>
            </div>
        </div>
    )

    }else{
    let apiKey = "faa5a241d5c428a14c3417782b47bc2d";
    let longitude = props.data.coordinates.lon;
    let latitude=props.data.coordinates.lat;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
    }
}

