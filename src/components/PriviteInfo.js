import React from "react";

export default function PriviteInfo(){
    const [formData, setFormData]=React.useState({
        firstName:"",
        lastName:"",
        image: "",
        aboutMe: "",
        email:"",
        mobile:""
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
                <h1 className="header">პირადი ინფო</h1>
                <div className="line-header"></div>
                <form onSubmit={handleSubmit}>
                        <div className="ful-name">
                                <div className="name">
                                    <label htmlFor="name">სახელი</label>
                                    <input
                                        type="text"
                                        placeholder='სახელი'
                                        onChange={handleChange}
                                        name="firstName"
                                        value={formData.firstName}
                                        id ="name"
                        
                                    />
                                    <h5>მინიმუმ ორი ასო, ქართული ასოები</h5>
                                </div>
                                <div className="surname">
                                    <label htmlFor="surname">გვარი</label>
                                    <input
                                        type="text" 
                                        placeholder='გვარი'
                                        onChange={handleChange}
                                        name="lastName"
                                        value={formData.lastName}
                                        id="surname"
                                    />
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
                                        />
                                        <button className="image-upload">ატვირთვა</button>
                                </div>
                                <div className="about-me">
                                        <label htmlFor="about">ჩემს შესახებ (არასავალდებულო)</label>
                                        <textarea 
                                            placeholder='ზოგადი ინფორმაცია შენს შესახებ'
                                            onChange={handleChange}
                                            name="aboutMe"
                                            value ={formData.comments}
                                            id="about"
                                        />
                                </div>


                                <div className="email">
                                        <label htmlFor="email">ელ.ფოსტა</label>
                                        <input
                                            type="email" 
                                            placeholder='Email'
                                            onChange={handleChange}
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                        />
                                        <h5 className="restriction"> უნდა მთავრდებოდეს @redberry.ge-ით</h5>
                                
                                </div>
                                <div className="mobile-number">
                                        <label htmlFor="mobile">მობილურის ნომერი</label>
                                        <input 
                                            type="tel"
                                            placeholder ="შეიყვანეთ ტელეფონის ნომერი"
                                            onChange={handleChange}
                                            name="mobile"
                                            value={formData.mobile}
                                            id="mobile"
                                        />
                                        <h5 className="restriction"> უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს</h5>

                                </div>
                        </div>
                </form>
                <button className="btn-next">შემდეგი</button>

            </div>
            <div className="resume">

            </div>
        </div>

    )
}