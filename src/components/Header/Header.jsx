import React from 'react'
import './header.scss'

import variant1 from '../../images/header-bg/variant1.jpg'
import variant2 from '../../images/header-bg/variant2.jpg'
import variant3 from '../../images/header-bg/variant3.jpg'
import variant4 from '../../images/header-bg/variant4.jpg'
import Navbar from './Navbar'
import SearchBar from './SearchBar'



const Header = () => {


    const pictureArray = [variant1, variant2, variant3, variant4];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];

    const state = {
        bgStyle: {
            backgroundImage: `url(${selectedPicture})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
    }

    return (
        <div >
            <header style={state.bgStyle}>
                <div className="cover">

                    <Navbar />
                    <SearchBar />

                </div>
            </header>
        </div>
    )
}

export default Header