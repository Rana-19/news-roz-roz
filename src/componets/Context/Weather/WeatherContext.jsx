import { createContext, useReducer } from "react";
import WeatherReducer from "./WeatherReducer";

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const initialState = {
        weather:
        {
            location: {
                // name: "Indore",

            },
            current: {

                // temp_c: 31.0,
                // temp_f: 87.8,
                // is_day: 1,
                condition: {
                    // text: "Mist",
                    // icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
                    // code: 1030
                },
                // wind_mph: 8.1,
                // wind_kph: 13.0,
                // wind_degree: 140,

                // humidity: 29,

                air_quality: {
                    // co: 300,
                    // "us-epa-index": 3,
                    // "gb-defra-index": 6
                }
            },
        }

    }
    const [state, weatherDispatch] = useReducer(WeatherReducer, initialState)
    return (
        <WeatherContext.Provider value={{ ...state, weatherDispatch }}>
            {children}
        </WeatherContext.Provider>
    )

}
export default WeatherContext