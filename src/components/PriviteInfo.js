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
                <div className="line"></div>
                <form onSubmit={handleSubmit}>
                        <div className="ful-name">
                                <div className="name">
                                    <label for="file">სახელი</label>
                                    <input
                                        type="text"
                                        placeholder='სახელი'
                                        onChange={handleChange}
                                        name="firstName"
                                        value={formData.firstName}
                        
                                    />
                                    <h5>მინიმუმ ორი ასო, ქართული ასოები</h5>
                                </div>
                                <div className="surname">
                                    <label for="file">გვარი</label>
                                    <input
                                        type="text" 
                                        placeholder='გვარი'
                                        onChange={handleChange}
                                        name="lastName"
                                        value={formData.lastName}
                                    />
                                    <h5>მინიმუმ ორი ასო, ქართული ასოები</h5>
                                
                                </div>
{/* ფუნქციონალი გასამართავია */}
                                <div className="privite-image">
                                        <label for="file">პირადი ფოტოს ატვირთვა</label>
                                        <input 
                                            type="file"
                                            onChange={handleChange}
                                            name="image"
                                            value={formData.image}
                                            accept="image/png, image/jpg, image/gif, image/jpeg"
                                            style={{display: 'none'}}
                                        />
                                        <button className="image-upload">ატვირთვა</button>
                                </div>
                                <div className="about-me">
                                        <label>ჩემს შესახებ (არასავალდებულო)</label>
                                        <textarea 
                                            placeholder='ზოგადი ინფორმაცია შენს შესახებ'
                                            onChange={handleChange}
                                            name="aboutMe"
                                            value ={formData.comments}
                                        />
                                </div>


                                <div className="email">
                                        <label>ელ.ფოსტა</label>
                                        <input
                                            type="email" 
                                            placeholder='Email'
                                            onChange={handleChange}
                                            name="email"
                                            value={formData.email}
                                        />
                                        <h5 className="restriction"> უნდა მთავრდებოდეს @redberry.ge-ით</h5>
                                
                                </div>
                                <div className="mobile-number">
                                        <label>მობილურის ნომერი</label>
                                        <input 
                                            type="tel"
                                            placeholder ="შეიყვანეთ ტელეფონის ნომერი"
                                            onChange={handleChange}
                                            name="mobile"
                                            value={formData.mobile}
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