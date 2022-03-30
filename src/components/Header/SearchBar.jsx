import React from 'react'
import './searchbar.scss'
import logo1 from '../../images/logo.svg'
import search from '../../images/search.svg'

const SearchBar = () => {
    return (
        <div>

            <div className='content container text-center'>


                <img src={logo1} alt="" />


                <div className="wrapper d-flex justify-content-center align-items-center">
                    <div className="search-unit d-flex">

                        <div className='search-find common-search'>
                            <span>Find</span>
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className="hr"></div>
                        <div className="search-near common-search">
                            <span>Near</span>
                            <input type="text" placeholder='Search' />

                        </div>
                        
                    </div>
                    <div className='box'>
                    <img src={search} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SearchBar