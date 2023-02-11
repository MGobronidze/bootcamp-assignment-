import React from "react";
import './priviteinfo.css';
import {Link } from "react-router-dom";
import arrow from "./images/arrow.png";
// import valid from "./images/valid-icon.png";
import invalid from "./images/invalid-icon.png";
import Resume from "./Resume";


export default function PriviteInfo(){
  const [formData, setFormData] = React.useState(
    JSON.parse(localStorage.getItem("formData"))||{
        firstName:"",
        lastName:"",
        image: "",
        aboutMe: "",
        email:"",
        mobile:""
   })

  function handleClick(){
      localStorage.clear()
  }

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
    
  const [focusedName, setFocusedName] = React.useState(false);
    
  const handleFocusName = (e) => {
      setFocusedName(true);
  };
  const [focusedSurName, setFocusedSurName] = React.useState(false);
    
  const handleFocusSurName = (e) => {
      setFocusedSurName(true);
  };
  const [focusedEmail, setFocusedEmail] = React.useState(false);
    
  const handleFocusEmail = (e) => {
      setFocusedEmail(true);
  };
  const [focusedMobile, setFocusedMobile] = React.useState(false);
    
  const handleFocusMobile = (e) => {
      setFocusedMobile(true);
  };


    return(
        <div className="container">
            <div className="form">
                <Link to={'/'} onClick={handleClick}> <img src={arrow} className="arrow" alt="here is arrow cklick to go to the first page"></img></Link>
                <h1 className="title">პირადი ინფო</h1>
                <p className="page-number">1/3</p>
                <div className="line-header"></div>
                <form>
                        <div className="ful-name">
                                <div className="name">
                                    <label htmlFor="name">სახელი</label>
                                    <div className="validation">
                                        <input
                                            type="text-priv"
                                            placeholder='სახელი'
                                            onChange={handleChange}
                                            name="firstName"
                                            value={formData.firstName}
                                            id ="name"
                                            required = "true"
                                            pattern="^[ა-ჰ]{2,}"
                                            onBlur={handleFocusName}
                                            focused={focusedName.toString()}
                                        />
                                      {/* <img src={valid} alt=" hare is validation icon"  className="valid-icon"/> */}
                                      <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                    </div>
                                    <h5>მინიმუმ ორი ასო, ქართული ასოები</h5>
                                </div>
                                <div className="surname">
                                    <label htmlFor="surname">გვარი</label>
                                   <div className="validation">
                                        <input
                                            type="text-priv" 
                                            placeholder='გვარი'
                                            onChange={handleChange}
                                            name="lastName"
                                            value={formData.lastName}
                                            id="surname"
                                            required = {true}
                                            pattern="^[ა-ჰ]{2,}"
                                            onBlur={handleFocusSurName}
                                            focused={focusedSurName.toString()}

                                        />
                                        <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                    </div>
                                    <h5>მინიმუმ ორი ასო, ქართული ასოები</h5>
                                
                        </div>
{/* ფუნქციონალი გასამართავია */}
                                <div className="privite-image">
                                        <label htmlFor="image">პირადი ფოტოს ატვირთვა</label>
                                        <input 
                                            type="file"
                                            onChange={handleChange}
                                            name="image"
                                            value={formData.image}
                                            accept="image/png, image/jpg, image/gif, image/jpeg"
                                            style={{display: 'none'}}
                                            id="image"
                                            // required = "true"
                                            // onBlur={handleFocus}
                                            // focused={focused.toString()}

                                        />
                                        <button className="image-upload" >ატვირთვა</button>
                                </div>
                                <div className="about-me">
                                        <label htmlFor="about">ჩემს შესახებ (არასავალდებულო)</label>
                                        <textarea 
                                            placeholder='ზოგადი ინფორმაცია შენს შესახებ'
                                            onChange={handleChange}
                                            name="aboutMe"
                                            value ={formData.aboutMe}
                                            id="about"
                                        />
                                </div>


                                <div className="email">
                                        <label htmlFor="email">ელ.ფოსტა</label>
                                        <div className="validation">
                                          <input
                                              type="email" 
                                              placeholder='Email'
                                              onChange={handleChange}
                                              name="email"
                                              id="email"
                                              value={formData.email}
                                              required = "true"
                                              pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge"
                                              onBlur={handleFocusEmail}
                                              focused={focusedEmail.toString()}

                                          />
                                          <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                        </div>
                                        <h5 className="restriction"> უნდა მთავრდებოდეს @redberry.ge-ით</h5>
                                
                                </div>
                                <div className="mobile-number">
                                        <label htmlFor="mobile">მობილურის ნომერი</label>
                                       <div className="validation">
                                          <input 
                                              type="tel"
                                              placeholder ="შეიყვანეთ ტელეფონის ნომერი"
                                              onChange={handleChange}
                                              name="mobile"
                                              value={formData.mobile}
                                              id="mobile"
                                              required = "true"
                                              pattern="^[\+ 0]0?995 \d{3} \d{2} \d{2} \d{2}$"
                                              onBlur={handleFocusMobile}
                                              focused={focusedMobile.toString()}

                                          />
                                          <img src={invalid} alt=" hare is validation icon" className="invalid-icon"/>
                                    
                                        </div>
                                        <h5 className="restriction"> უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს</h5>

                                </div>
                                
                        </div>
                </form>
               <Link to={'/Experience'}> <button className="btn-next" >შემდეგი</button> </Link>

            </div>
            <Resume top="0px" 
                    left="1089px" 
                    />
        </div>

    )
}