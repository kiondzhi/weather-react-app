import React, { useState, useRef, useEffect, useContext } from 'react';

function WeatherMain(props) {

    const notCloudy = "https://cdn-icons-png.flaticon.com/512/6227/6227388.png";

    const cloudy = "https://cdn-icons-png.flaticon.com/512/7809/7809766.png"


    return (
        <div className="weather-main">
            <img src={parseInt(props.weatherDescription) > 50 ? cloudy : notCloudy} alt="" />
            <p className='temperature'>{props.temp}</p>
            <p className='weather-details'>{props.weatherDescription}</p>
        </div>
    )
}

export default WeatherMain