import React from "react";
import { Link } from "react-router-dom";
import "./education.css";
import arrow from './images/arrow.png';
// import logo from "./images/resume-logo.png";
// import valid from "./images/valid-icon.png";
import invalid from "./images/invalid-icon.png";
import Resume from "./Resume";


export default function Education(){
    
    const [formData, setFormData]=React.useState(JSON.parse(localStorage.getItem("formData"))||{
        school:"",
        degree:"",
        eduEndDate: "",
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
    
    function handleClick(){
      localStorage.clear()
    }
    const [focusedScool, setFocusedScool] = React.useState(false);
    
    const handleFocusScool = (e) => {
      setFocusedScool(true);
    };
    const [focusedDegree, setFocusedDegree] = React.useState(false);
    
    const handleFocusDegree = (e) => {
      setFocusedDegree(true);
    };
   
    const [focusedEduEnddate, setFocusedEduEnddate] = React.useState(false);
    
    const handleFocusEduEnddate = (e) => {
      setFocusedEduEnddate(true);
    };
    const [focusedDescr, setFocusedDescr] = React.useState(false);
    
    const handleFocusDescr = (e) => {
      setFocusedDescr(true);
    };
    return(
        <div className="container">
            <div className="form">
                <Link to={'/'} onClick={handleClick}> <img src={arrow} className="arrow" alt="here is arrow cklick to go to the first page"></img></Link>
                <h1 className="title">განათლება</h1>
                <p className="page-number">3/3</p>
                <div className="line-header"></div>
                <form onSubmit={handleSubmit}>
                                <div className="school">
                                    <label htmlFor="school">სასწავლებელი</label>
                                    <div className="validation">
                                        <input
                                            type="text"
                                            placeholder='სასწავლებელი'
                                            onChange={handleChange}
                                            name ="school"
                                            value={formData.school}
                                            id="school"
                                            required = {true}
                                            pattern="^{2,}"
                                            onBlur={handleFocusScool}
                                            focused={focusedScool.toString()}
                                        />
                                        <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                    </div>
                                    <h5>მინიმუმ ორი სიმბოლო</h5>
                                </div>
                          <div className="degree-date">
                               <div className="degree">
                                    <label htmlFor="degree">ხარისხი</label>
                                    <div className="validation">
                                        <select
                                                  id='degree'
                                                  value={formData.degree}
                                                  onChange={handleChange}
                                                  name='degree'
                                                  required = {true}
                                                  onBlur={handleFocusDegree}
                                                  focused={focusedDegree.toString()}  
                                            >     
                                                  <option value='d'>აირჩიეთ ხარისხი</option>
                                                  <option value='GeneralEducation'>ზოგადსაგანმანათლებლო დიპლომი</option>
                                                  <option value='Bachelor'>ბაკალავრი</option>
                                                  <option value='Master'>მაგისტრი</option>
                                                  <option value='PhD'>დოქტორი</option>
                                                  <option value='Professor'>ასოცირებული პროფესორი</option>
                                                  <option value='Student'>სტუდენტი</option>
                                                  <option value='College'>კოლეჯი(ხარისხის გარეშე)</option>
                                                  <option value='Other'>სხვა</option>

                                        </select>
                                        <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                    </div>
                                    
                                </div>
                                  
                                <div className="end-date">
                                        <label htmlFor="eduEndDate">დამთვრების თარიღი</label>
                                       <div className="validation">
                                            <input 
                                                type="date"
                                                onChange={handleChange}
                                                name="eduEndDate"
                                                value={formData.eduEndDate}
                                                id="eduEndDate"
                                                required = {true}
                                                onBlur={handleFocusEduEnddate}
                                                focused={focusedEduEnddate.toString()}

                                            />
                                            <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                      </div>
                                </div>
                         </div>
                                <div className="description">
                                        <label htmlFor="description">აღწერა</label>
                                        <div className="validation">
                                        <textarea 
                                            placeholder='განათლების აღწერა'
                                            onChange={handleChange}
                                            name="description"
                                            value ={formData.description}
                                            id="description"
                                            required = {true}
                                            onBlur={handleFocusDescr}
                                            focused={focusedDescr.toString()}
                                        />
                                        <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                      </div>
                                </div>
                </form>

                <div className="line-bottom"></div>
                <button className="btn-add">მეტი გამოცდილების დამატება</button>
                <Link to={'/Experience'}> <button className="btn-back">უკან</button></Link>
                <Link to={'/ResumeFinal'}> <button className="btn-next">შემდეგი</button></Link>

            </div>
                <Resume top="0px" left="1089px"/>
       
       
        </div>

    )
}