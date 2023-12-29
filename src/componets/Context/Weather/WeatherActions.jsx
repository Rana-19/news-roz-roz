export const fetchWeather = async (name) => {

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f3261d5f01c1482280282424230711&q=${name}&days=1&aqi=yes&alerts=no`)
    const weatherData = await response.json()
    return weatherData
}