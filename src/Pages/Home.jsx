import React from "react";
import { Link } from 'react-router-dom';

import  "../styles/home.css";

const Home = () => {
    return(
        <div className="TotalBox">
            <div className="homeBox">
                <h1 className="homeTitle">Laletra</h1>
                <p className="homeText">Busca la letra que más te gusta</p>
                <Link to='/letras'>
                    <button className="homeButton">Empecemos</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;