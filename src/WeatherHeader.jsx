import React, { useState, useRef, useEffect, useContext } from 'react';
import WeatherMain from './WeatherMain.jsx';
import WeatherFooter from './WeatherFoooter.jsx';

function WeatherHeader(props) {

    const [isActive, setIsActive] = useState(false);

    const [cityName, setCityName] = useState("Moscow")

    const [temperature, setTemperature] = useState(11 + `°`)

    const [wind, setWind] = useState(11 + `Km/h`)

    const [humidity, setHumidity] = useState(11 + `%`)

    const [weatherCity, setWeatherCity] = useState("11% clouds")

    const focusRef = useRef(null)

    const [height, setHeight] = useState(window.innerHeight)

    function handleResize() {
        setHeight(window.innerHeight)
        window.removeEventListener('resize', handleResize);
        console.log(height)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })

    document.title = "Weather in " + cityName;

    function activation() {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    function focusOnInput() {
        focusRef.current.focus()
    };

    function handleCityName() {
        let nameOfCity = event.target.value;
        if (nameOfCity.length < 23) {
            setCityName(nameOfCity)
        }
    };

    function submitWeather() {

        const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
        const apiKey = '7974304641172222d2e075302666934f';
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(function (data) {
                setCityName(data.name);
                setTemperature(Math.round(data.main.temp - 273.16) + `°`);
                setWind((data.wind.speed) + `Km/h`)
                setHumidity((data.main.humidity) + `%`)
                setWeatherCity((data.clouds.all) + '%' + ' Clouds')
            })
    }

    return (
        <>
            <div className="weather-header" style={{ gap: isActive ? "10%" : "33%" }}>
                <div className="location-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png" alt="" />
                    <p className='weather-city'>{cityName ? cityName.toUpperCase() : " NOT FOUND"}</p>
                </div>
                <div className='search-father' onClick={focusOnInput}>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" onClick={activation} style={{ display: isActive ? "none" : "block" }} alt="" className="search-button" />
                    <div className='search-container'>
                        <input type='text' ref={focusRef} style={{ display: isActive ? "block" : "none" }} className="search-block" placeholder='Moscow' onChange={handleCityName}></input>
                        <button onClick={submitWeather} className='submit-button' style={{ display: isActive ? "block" : "none" }} >Submit</button>
                        <button className='close-button' onClick={activation} style={{ display: isActive ? "block" : "none" }}>Close</button>
                    </div>
                </div>
            </div >
            <WeatherMain temp={temperature} weatherDescription={weatherCity}></WeatherMain>
            <WeatherFooter windSpeed={wind} humidityProcent={humidity}></WeatherFooter>
        </>
    )
}

export default WeatherHeader