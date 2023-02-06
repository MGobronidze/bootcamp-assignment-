import React from "react";
import background from "./images/background-image.png";
import logo from "./images/LOGO.png";
import redberryLogo from "./images/redberry-logo.png";
import "./homepage.css";
import {BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import PriviteInfo from './PriviteInfo';

export default function HomePage(){

    
    return(
        <div className="container" style={{ backgroundImage:`url(${background})`}}>
            <img src={redberryLogo} className="redberry-logo" alt="here is logo"></img>
            <div className="line"></div>
            <Router>
                <Link to="/PriviteInfo">
                    <button className="home-button">რეზიუმეს დამატება</button>
                </Link>
            
                <img src={logo} className="home-page-logo" alt="here is logo"></img>

                <Routes>
                        <Route path="/PriviteInfo"> element ={<PriviteInfo />}</Route>
                </Routes> 
            </Router>
        </div>
    )
}
