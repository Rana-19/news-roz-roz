import React, { useContext, useEffect } from 'react'
import NewsContext from '../Context/News/NewsContext'
import NewsCard from '../NewsCard'
import { fetchNews } from '../Context/News/NewsActions'
import Weather from '../Weather'
import ThemeContext from '../Context/Theme/ThemeContext'

const HomePage = () => {
  const { allNews, dispatch } = useContext(NewsContext)
  const { isDark } = useContext(ThemeContext)

  const getNews = async () => {
    const newsData = await fetchNews("Indore")

    dispatch({
      type: "GET_NEWS",
      payload: newsData
    })
  }

  useEffect(() => {
    getNews()
  }, [])

  if (!allNews) {
    return (
      <h1 className='text-danger display-3 text-center'>Loading...</h1>
    )
  }
  return (
    <div className={isDark ? 'd-flex flex-row bg-dark justify-content-around my-2' : 'd-flex flex-row  justify-content-around my-2'}>
      <div className='container' style={{ height: "100vh", width: "65%", overflow: "scroll" }}>
        <div className='row p-2' >

          {
            allNews.map((news, index) => (<NewsCard key={index} news={news} />))

          }
        </div>
      </div>
      <div className='container' style={{ width: "33%", overflow: "scroll", height: "400px", background: "rgb(238,174,202)", background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(106,164,232,1) 100%)" }}>
        <Weather />
      </div>

    </div>



  )
}

export default HomePage