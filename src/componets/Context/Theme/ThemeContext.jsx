import { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const initialState = {
        isDark: false
    }
    const [state, themeDispatch] = useReducer(ThemeReducer, initialState)
    return (
        <ThemeContext.Provider value={{ ...state, themeDispatch }}>
            {children}
        </ThemeContext.Provider>
    )

}


export default ThemeContext