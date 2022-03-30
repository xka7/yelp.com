import React from 'react'
import './style.scss'

import variant1 from '../../images/header-bg/variant1.jpg'
import variant2 from '../../images/header-bg/variant2.jpg'
import variant3 from '../../images/header-bg/variant3.jpg'
import variant4 from '../../images/header-bg/variant4.jpg'



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

                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto ">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Write a Review</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Events</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Talk</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Yelp for Business</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <a href="#" className='login'>Log In</a>
                                    <a href="#" className='signup'>Sign Up</a>
                                </form>
                            </div>
                        </div>
                    </nav>

                </div>
            </header>
        </div>
    )
}

export default Header