import React from "react";

export default function WeatherTemp(props){
    return(
    <div className="weatherTemp">
        <ul>
            <li className="currentTemp" >
                {Math.round(props.celcius)}ºc
            </li>
            
        </ul>
    </div>)}
    
