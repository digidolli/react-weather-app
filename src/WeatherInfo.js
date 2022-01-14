import React from "react";
import TidyDate from "./TidyDate";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo (props){
return(
    <div className="WeatherInfo">
        <div className="currentForecast row">
            <div className="cityHeading">
                <h1 className="place text-capitalize" id="place"> {props.data.city}</h1>
                <h1 className="day text-capitalize" > <TidyDate date={props.data.date} /><span id="day"> </span></h1>
            </div>
            <div className="col-6 firstCol">
                <img src={props.data.icon} alt={props.data.iconAlt} className="icon-cloudy" id="icon" />
            </div>
            <div className="col-6 secondCol">
                <WeatherTemp celcius={props.data.temp} />
                
            </div>
            <h1 className="weatherDetails text-capitalize" id="weatherDetails">{props.data.details}</h1>
            <p>
                <strong>Humidity: <span id="humidity">{props.data.humidity}</span> </strong> <strong>%</strong>
                <strong>| Wind: <span id="wind">{props.data.wind}</span> Km/H</strong>
            </p>
        </div>
    </div>
    
    );
};