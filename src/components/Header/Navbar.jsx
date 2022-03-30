import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
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
    )
}

export default Navbar