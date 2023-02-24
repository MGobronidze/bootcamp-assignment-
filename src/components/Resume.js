import React from "react";
import './resume.css';
import { Link } from "react-router-dom";
import arrow from "./images/arrow.png";
import logo from "./images/resume-logo.png";
import email from "./images/email.png";
import phone from "./images/phone.png"


export default function Resume(props){
  const styles ={
        top: props.top,
        left: props.left,
        borderColor: props.color,
        borderWidth: props.width,
        borderStyle: props.borderStyle
}
  function handleClick(){
        localStorage.clear()
  }
  const formData = JSON.parse(localStorage.getItem("formData"))||{
        firstName:"",
        lastName:"",
        image: "",
        aboutMe: "",
        email:"",
        mobile:"",
        position:"",
        company:"",
        startDate: "",
        endDate: "",
        descriptionExp:"",
        school:"",
        degree:"",
        eduEndDate: "",
        description:""
  }

 return(
        <div >
                <Link to={'/'} onClick={handleClick}> <img src={arrow} className="arrow" alt="here is arrow cklick to go to the first page"></img></Link>
                <div className="resume-final" style={styles}>
                <div className="resume-full-name">
                        <div className="resume-name">{formData.firstName}</div>
                        <div className="resume-surname">{formData.lastName}</div>
                </div>
                <div className="resume-image">{formData.image}</div>
                <div className="resume-email-container">
                        {formData.email&&<div className="email-sign"><img src={email} alt="here is email symbol"/></div>}
                        <div className="resume-email">{formData.email}</div>
                </div>
                <div className="resume-mobile-container">
                        {formData.mobile && <div className="resume-mobile-sign"><img src={phone} alt="here is phone symbol"/></div>}
                        <div className="resume-mobile">{formData.mobile}</div>
                </div>
                <div className="resume-aboutMe-container">
                        {formData.aboutMe && <div className="resume-aboutMe-header"> ჩემს შესახებ </div>}
                        <div className="resume-aboutMe">{formData.aboutMe}</div> 
                </div>
                {/* <div className="resume-experience">
                        <div className="experience-position">{formData.position}</div>
                        <div className="experience-company">{formData.company}</div>
                        <div className="experience-dates">{formData.startDate} - {formData.endDate}</div>
                        <div className="experience-description">{formData.descriptionExp}</div>
                </div>
                <div className="resume-education">
                        <div className="education-school">{formData.school}</div>
                        <div className="education-degree">{formData.degree}</div>
                        <div className="education-date">{formData.endDate}</div>
                        <div className="education-description">{formData.description}</div>
                </div> */}
                        <img src={logo} className="logo-resume" alt="here is logo"></img>
                </div>
                
        </div>
   )
}
