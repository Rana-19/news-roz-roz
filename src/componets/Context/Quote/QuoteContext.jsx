import { createContext, useReducer } from "react";
import QuoteReducer from "./QuoteReducer";


const QuoteContext = createContext()

export const QuoteProvider = ({ children }) => {
    const initialState = {
        quoteData: {}
    }
    const [state, quoteDispatch] = useReducer(QuoteReducer, initialState)

    return (
        <QuoteContext.Provider value={{ ...state, quoteDispatch }}>
            {children}
        </QuoteContext.Provider>
    )
}

export default QuoteContext