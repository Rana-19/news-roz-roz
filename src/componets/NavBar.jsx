import React, { useContext, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { fetchNews } from './Context/News/NewsActions'
import NewsContext from './Context/News/NewsContext'
import ThemeContext from './Context/Theme/ThemeContext'
const NavBar = () => {
    const [search, setSearch] = useState("")
    const { dispatch } = useContext(NewsContext)
    const { isDark, themeDispatch } = useContext(ThemeContext)



    const changeTheme = () => {

        themeDispatch({
            type: "CHANGE_THEME"
        })
    }


    const getNews = async (search) => {
        const newsData = await fetchNews(search)

        dispatch({
            type: "GET_NEWS",
            payload: newsData
        })
    }

    const handleSearch = (e) => {
        e.preventDefault()
        getNews(search)
        setSearch("")

    }

    return (
        <div>
            <nav className={isDark ? 'navbar navbar-expand-lg navbar-light bg-dark px-2 d-flex justify-content-between' : 'navbar navbar-expand-lg navbar-light bg-primary px-2 d-flex justify-content-between'}>
                <h1 className={isDark ? 'display-8 text-danger' : 'display-8 text-white'}>News roz-roz</h1>


                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className=' navbar-nav w-25 mx-2 d-flex flex-row justify-content-around'>
                        <li className='nav-item'>
                            <a className='nav-link text-light' onClick={() => getNews("Indian Business news")}>business</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-light' onClick={() => getNews("Indian politics news")}>politics</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-light' onClick={() => getNews("Indian sports news")}>sports</a>
                        </li>

                    </ul>




                    <form className="d-flex" onSubmit={(e) => handleSearch(e)}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} value={search} />
                        <button className="btn btn-outline-light" type="submit"><BsSearch /></button>
                    </form>


                </div>
                <button className='btn btn-outline-light' onClick={() => changeTheme()}>{isDark ? "Light Theme" : "Dark Theme"}</button>



            </nav >
        </div >
    )
}

export default NavBar