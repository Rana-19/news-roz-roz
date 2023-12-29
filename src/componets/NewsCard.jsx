import React, { useContext } from 'react'
import defautImage from "../assets/images/404.png"
import ThemeContext from './Context/Theme/ThemeContext'

const NewsCard = ({ news }) => {
    const { isDark } = useContext(ThemeContext)


    return (

        <div className='col-md-12 col-sm-12'>
            <div className={isDark ? "card mb-3 bg-dark text-danger" : "card mb-3 bg-light text-dark"}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={news.urlToImage ? news.urlToImage : defautImage} className="img-fluid w-100 rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{news.title}</h5>
                            <p className="card-text">{news.description}</p>
                            <a href={news.url} className='btn btn-danger'>Read Full</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default NewsCard