import React from "react";
import "./education.css"

export default function Education(){
    const [formData, setFormData]=React.useState({
        school:"",
        degree:"",
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
                <h1 className="header">განათლება</h1>
                <div className="line-header"></div>
                <form onSubmit={handleSubmit}>
                                <div className="school">
                                    <label htmlDor="school">სასწავლებელი</label>
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
                <button className="btn-back">უკან</button>
                <button className="btn-next">შემდეგი</button>

            </div>

            <div className="resume">

            </div>
        </div>

    )
}