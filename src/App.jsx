import React from 'react'
import NavBar from './componets/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NewsProvider } from './componets/Context/News/NewsContext'
import HomePage from './componets/pages/HomePage'
import Quote from './componets/Quote'
import { QuoteProvider } from './componets/Context/Quote/QuoteContext'
import { ThemeProvider } from './componets/Context/Theme/ThemeContext'
import { WeatherProvider } from './componets/Context/Weather/WeatherContext'
// import HomePage from './componets/pages/HomePage'

const App = () => {
  return (

    <Router>
      <ThemeProvider>
        <NewsProvider>
          <WeatherProvider>
            <QuoteProvider>
              <NavBar />
              <Quote />
              <Routes>
                <Route path='/' element={<HomePage />} />
              </Routes>
            </QuoteProvider>
          </WeatherProvider>
        </NewsProvider>
      </ThemeProvider>
    </Router>

  )
}

export default App