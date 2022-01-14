import React, {useState} from "react";

export default function WeatherTemp(props){

    const [unit, setUnit] = useState("celcius")

    function convertToFarenheit (event){
        event.preventDefault();
        setUnit("farenheit")
    }
    
    function convertToCelcius (event){
        event.preventDefault();
        setUnit("celcius")
    }
    if (unit === "celcius"){


    return(
    <div className="weatherTemp">
        <ul>
            <li className="currentTemp" id="temp">
                {Math.round(props.celcius)}ºc
            </li>
            <li>
                ºC | <a href="/" onClick={convertToFarenheit}>ºF</a>
            </li>
        </ul>
    </div>)}
    else {
        let farenheit = (props.celcius *9/5) + 32
        return (
        <div className="weatherTemp">
        <ul>
            <li className="currentTemp" id="temp">
                {Math.round(farenheit)}ºc
            </li>
            <li>
                <a href="/" onClick={convertToCelcius}>ºC</a>| ºF
            </li>
        </ul>
    </div>)
    }
}