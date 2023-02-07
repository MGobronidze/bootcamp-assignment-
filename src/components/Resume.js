import React from "react";
import './resume.css';
import { Link } from "react-router-dom";
import arrow from "./images/arrow.png";
import logo from "./images/resume-logo.png"


export default function Resume(){
    function handleClick(){
        localStorage.clear()
      }
    return(
       <div>
        <Link to={'/'} onClick={handleClick}> <img src={arrow} className="arrow" alt="here is arrow cklick to go to the first page"></img></Link>
        <div className="resume-final"></div>
        <img src={logo} className="logo-resume" alt="here is logo"></img>
       </div>
    )
}