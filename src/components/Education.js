import React from "react";
import { Link } from "react-router-dom";
import "./education.css";
import arrow from './images/arrow.png';
import logo from "./images/resume-logo.png";


export default function Education(){
    
    const [formData, setFormData]=React.useState(JSON.parse(localStorage.getItem("formData"))||{
        school:"",
        degree:"",
        endDate: "",
        description:""
      })
React.useEffect(()=>{
        localStorage.setItem('formData', JSON.stringify(formData))
}, [formData]);
     
     
    function handleChange(event){
      const {name, value}=event.target    
      setFormData(
        prevData => {
          return{
            ...prevData,
            [name]:value
          }
        }
      )
    }
    function handleSubmit(event){
      event.preventDefault()
      console.log(formData)
    }
    
    return(
        <div className="container">
            <div className="form">
                <Link to={'/'}> <img src={arrow} className="arrow" alt="here is arrow cklick to go to the first page"></img></Link>
                <h1 className="title">განათლება</h1>
                <p className="page-number">3/3</p>
                <div className="line-header"></div>
                <form onSubmit={handleSubmit}>
                                <div className="school">
                                    <label htmlFor="school">სასწავლებელი</label>
                                    <input
                                        type="text"
                                        placeholder='სასწავლებელი'
                                        onChange={handleChange}
                                        name ="school"
                                        value={formData.school}
                                        id="school"
                        
                                    />
                                    <h5>მინიმუმ ორი სიმბოლო</h5>
                                </div>
                          <div className="degree-date">
                               <div className="degree">
                                    <label htmlFor="degree">ხარისხი</label>
                                    <select
                                              id='degree'
                                              value={formData.degree}
                                              onChange={handleChange}
                                              name='degree'
                                        >
                                              <option value=''>აირჩიეთ ხარისხი</option>
                                              <option value='GeneralEducation'>ზოგადსაგანმანათლებლო დიპლომი</option>
                                              <option value='Bachelor'>ბაკალავრი</option>
                                              <option value='Master'>მაგისტრი</option>
                                              <option value='PhD'>დოქტორი</option>
                                              <option value='Professor'>ასოცირებული პროფესორი</option>
                                              <option value='Student'>სტუდენტი</option>
                                              <option value='College'>კოლეჯი(ხარისხის გარეშე)</option>
                                              <option value='Other'>სხვა</option>

                                    </select>
                                    
                                </div>
                                  
                                <div className="end-date">
                                        <label htmlFor="endDate">დამთვრების თარიღი</label>
                                        <input 
                                            type="date"
                                            onChange={handleChange}
                                            name="endDate"
                                            value={formData.endDate}
                                            id="endDate"
                                        />
                                </div>
                         </div>
                                <div className="description">
                                        <label htmlFor="description">აღწერა</label>
                                        <textarea 
                                            placeholder='განათლების აღწერა'
                                            onChange={handleChange}
                                            name="description"
                                            value ={formData.description}
                                            id="description"
                                        />
                                </div>
                </form>

                <div className="line-bottom"></div>
                <button className="btn-add">მეტი გამოცდილების დამატება</button>
                <Link to={'/Experience'}> <button className="btn-back">უკან</button></Link>
                <Link to={'/Resume'}> <button className="btn-next">შემდეგი</button></Link>

            </div>

                <div className="resume">
                    <img src={logo} className="logo" alt="here is logo"></img>
                </div>
        </div>

    )
}