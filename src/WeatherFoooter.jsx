import React, { useState, useRef, useEffect, useContext } from 'react';

function WeatherFooter(props) {
    return (
        <div className="weather-footer">
            <img src="https://cdn-icons-png.flaticon.com/512/13944/13944027.png" alt="" />
            <div className="humidity">
                <p className="humidity-percentage">{props.humidityProcent}</p>
                <p>Humidity</p>
            </div>
            <img className="wind-speed-pic" src="   https://cdn-icons-png.flaticon.com/512/11742/11742598.png " alt="" />
            <div className="wind-speed-container">
                <p className="wind-speed">{props.windSpeed}</p>
                <p>Wind speed</p>
            </div>
        </div>
    )
}

export default WeatherFooter