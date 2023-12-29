import React, { useContext, useEffect } from 'react'
import QuoteContext from './Context/Quote/QuoteContext'
import { fetchQuotes } from './Context/Quote/QuoteActions'

const Quote = () => {
    const { quoteData, quoteDispatch } = useContext(QuoteContext)

    const getQuote = async () => {
        const Qdata = await fetchQuotes();
        quoteDispatch({
            type: "GET_QUOTE",
            payload: Qdata
        })

    }
    useEffect(() => {
        getQuote()
    }, [])

    if (!quoteData) {
        <marquee>
            <h1 className="display-4 text-danger">Loading Quotes....</h1>
        </marquee>
    }
    return (
        <div className='container-fluid bg-dark my-1'>
            <marquee>
                <h1 className='display-4 text-danger fw-bolder fst-italic'>{quoteData.content}---{quoteData.author}</h1>
            </marquee>
        </div>
    )
}

export default Quote