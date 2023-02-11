import React from "react";
import { Link } from "react-router-dom";
import "./experience.css";
import arrow from './images/arrow.png';
// import valid from "./images/valid-icon.png";
import invalid from "./images/invalid-icon.png";
import Resume from "./Resume";

export default function Experience(){
    const [formData, setFormData]=React.useState(JSON.parse(localStorage.getItem("formData"))||{
        position:"",
        company:"",
        startDate: "",
        endDate: "",
        descriptionExp:""
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
    function handleClick(){
      localStorage.clear()
    }
    const [focusedPosition, setFocusedPosition] = React.useState(false);
    
    const handleFocusPosition = (e) => {
      setFocusedPosition(true);
    };
    const [focusedCompany, setFocusedCompany] = React.useState(false);
    
    const handleFocusCompany = (e) => {
      setFocusedCompany(true);
    };
    const [focusedStart, setFocusedStart] = React.useState(false);
    
    const handleFocusStart = (e) => {
      setFocusedStart(true);
    };
    const [focusedEnd, setFocusedEnd] = React.useState(false);
    
    const handleFocusEnd = (e) => {
      setFocusedEnd(true);
    };
    const [focusedDesc, setFocusedDesc] = React.useState(false);
    
    const handleFocusDesc = (e) => {
      setFocusedDesc(true);
    };
    return(
        <div className="container">
            <div className="form">
                <Link to={'/'} onClick={handleClick}> <img src={arrow} className="arrow" alt="here is arrow cklick to go to the first page"></img></Link>
                <h1 className="title">გამოცდილება</h1>
                <p className="page-number">2/3</p>
                <div className="line-header"></div>
                <form onSubmit={handleSubmit}>
                                
                                <div className="position">
                                    
                                    <label htmlFor="position">თანამდებობდა</label>
                                      <div className="validation">
                                          <input
                                              type="text"
                                              placeholder='დეველოპერი, დიზაინერი, ა.შ.'
                                              onChange={handleChange}
                                              name ="position"
                                              value={formData.position}
                                              id="position"
                                              required = {true}
                                              pattern="^{2,}"
                                              onBlur={handleFocusPosition}
                                              focused={focusedPosition.toString()}

                              
                                          />
                                          <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                      </div>
                                    <h5>მინიმუმ ორი სიმბოლო</h5>
                                </div>

                                <div className="company">
                                    <label htmlFor="company">დამსაქმებელი</label>
                                   <div className="validation"> 
                                        <input
                                            type="text" 
                                            placeholder='დამსაქმებელი'
                                            onChange={handleChange}
                                            name="company"
                                            value={formData.company}
                                            id="company"
                                            required = "true"
                                            pattern="^{2,}"
                                            onBlur={handleFocusCompany}
                                            focused={focusedCompany.toString()}

                                        />
                                        <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                    </div>
                                    <h5>მინიმუმ ორი სიმბოლო</h5>
                                </div>
                        <div className='date'>        
                                <div className="start-date">
                                        <label htmlFor="startDate">დაწყების თარიღი</label>
                                        <div className="validation">
                                            <input 
                                                type="date"
                                                onChange={handleChange}
                                                name="startDate"
                                                value={formData.startDate}
                                                id="startDate"
                                                required = "true"
                                                onBlur={handleFocusStart}
                                                focused={focusedStart.toString()}

                                            />
                                            <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                        
                                        </div>
                                       
                                </div>  

                                <div className="end-date">
                                        <label htmlFor="endDate">დამთვრების თარიღი</label>
                                       <div className="validation">
                                        <input 
                                            type="date"
                                            onChange={handleChange}
                                            name="endDate"
                                            value={formData.endDate}
                                            id="endDate"
                                            required = "true"
                                            onBlur={handleFocusEnd}
                                            focused={focusedEnd.toString()}

                                        />
                                        <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                        </div>
                                </div>
                        </div>    
                                
                                <div className="description-exp">
                                        <label htmlFor="descriptionExp">აღწერა</label>
                                        <div className="validation">
                                            <textarea 
                                                placeholder='როლი თანამდებობდაზე და ზოგადი აღწერა'
                                                onChange={handleChange}
                                                name="descriptionExp"
                                                value ={formData.descriptionExp}
                                                id="descriptionExp"
                                                required = "true"
                                                onBlur={handleFocusDesc}
                                                focused={focusedDesc.toString()}

                                            />
                                            <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                        </div>
                                </div>
                        
                </form>

                <div className="line-bottom-exp"></div>
                <button className="btn-add-exp">მეტი გამოცდილების დამატება</button>
                <Link to={'/PriviteInfo'}><button className="btn-back">უკან</button></Link>
                <Link to={'/Education'}><button className="btn-next">შემდეგი</button></Link>

            </div>

            <Resume left = "1089px" top= "0px"/>
        </div>

    )
}