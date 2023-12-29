import React, { useContext, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import WeatherContext from './Context/Weather/WeatherContext'
import { fetchWeather } from './Context/Weather/WeatherActions'

const Weather = () => {
    const { weather, weatherDispatch } = useContext(WeatherContext)
    const [name, setName] = useState("")

    const getWeather = async (name) => {
        const wResponse = await fetchWeather(name)
        console.log(wResponse);
        weatherDispatch({
            type: "GET_WEATHER",
            payload: wResponse
        })
        console.log(wResponse);


    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getWeather(name)
    }

    if (!weather) {
        <h1 className='display-4'>Loading Weather...</h1>
    }
    return (
        <>
            <h1 className='display-6 text-center'>Weather-INFO</h1>
            <form className='my-2' onSubmit={(e) => handleSubmit(e)}>
                <span className='d-flex flex-row'>
                    <input type="text" className='form-control w-75' placeholder='Enter City' onChange={(e) => setName(e.target.value)} />
                    <button className='btn btn-outline-light mx-2'><BsSearch /></button>
                </span>
            </form>
            <div>
                <h1 className='text-light fw-bold' style={{ fontSize: "25px" }}>City: {weather.location.name}</h1>
                <h1 className='text-light fw-bold' style={{ fontSize: "25px" }}>Temperature (in deg C): {weather.current.temp_c}</h1>
                <h1 className='text-light fw-bold' style={{ fontSize: "25px" }}>AQI: {weather.current.air_quality.co}</h1>
                <h1 className='text-light fw-bold' style={{ fontSize: "25px" }}>Condition: {weather.current.condition.text}</h1>
                <h1 className='text-light fw-bold' style={{ fontSize: "25px" }}>Humidity (in %): {weather.current.humidity}</h1>
            </div>
        </>
    )
}

export default Weather