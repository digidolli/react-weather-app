import React from "react";

export default function WeatherForecastDay (props) {
    
    function maxTemp(){        
        let temp = Math.round(props.dayData[0].temp.max);
        return `${temp}º`;
    };

    function minTemp(){
        let temp = Math.round(props.dayData[0].temp.min);
        return `${temp}º`;
    };

    function day(){
        let date = new Date(props.dayData[0].dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }

    let imgUrl = `https://openweathermap.org/img/wn/${props.dayData[0].weather[0].icon}@2x.png`;
    console.log(props)
    return (
    <div className="weatherForecastData">
        <div className="forecastDay">
            {day()}
        </div>
        <img src={imgUrl} alt={props.dayData[0].weather[0].main} className="icon-cloudy" id="icon" />                    
        <div className="forecastTemp">
            <span className="forecastTempMax">{maxTemp()}</span>
            |
            <span className="forcastTempMin">{minTemp()}</span>
        </div>
     </div>
);
     
};