import React from "react";
import { Link } from "react-router-dom";
import "./experience.css";
import arrow from './images/arrow.png'

export default function Experience(){
    const [formData, setFormData]=React.useState({
        position:"",
        company:"",
        startDate: "",
        endDate: "",
        description:""
      })
    
     
     
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
                <h1 className="header">გამოცდილება</h1>
                <p className="page-number">3/3</p>
                <div className="line-header"></div>
                <form onSubmit={handleSubmit}>
                                
                                <div className="position">
                                    <label htmlDor="position">თანამდებობდა</label>
                                    <input
                                        type="text"
                                        placeholder='დეველოპერი, დიზაინერი, ა.შ.'
                                        onChange={handleChange}
                                        name ="position"
                                        value={formData.position}
                                        id="position"
                        
                                    />
                                    <h5>მინიმუმ ორი სიმბოლო</h5>
                                </div>

                                <div className="company">
                                    <label htmlFor="company">დამსაქმებელი</label>
                                    <input
                                        type="text" 
                                        placeholder='დამსაქმებელი'
                                        onChange={handleChange}
                                        name="company"
                                        value={formData.company}
                                        id="company"
                                    />
                                    <h5>მინიმუმ ორი სიმბოლო</h5>
                                </div>
                        <div className='date'>        
                                <div className="start-date">
                                        <label htmlFor="startDate">დაწყების თარიღი</label>
                                        <input 
                                            type="date"
                                            onChange={handleChange}
                                            name="startDate"
                                            value={formData.startDate}
                                            id="startDate"
                                        />
                                       
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
                                
                                <div className="description-exp">
                                        <label htmlFor="description">აღწერა</label>
                                        <textarea 
                                            placeholder='როლი თანამდებობდაზე და ზოგადი აღწერა'
                                            onChange={handleChange}
                                            name="description"
                                            value ={formData.description}
                                            id="description"
                                        />
                                </div>
                        
                </form>

                <div className="line-bottom-exp"></div>
                <button className="btn-add-exp">მეტი გამოცდილების დამატება</button>
                <Link to={'/PriviteInfo'}><button className="btn-back">უკან</button></Link>
                <Link to={'/Education'}><button className="btn-next">შემდეგი</button></Link>

            </div>

            <div className="resume">

            </div>
        </div>

    )
}