import React from 'react';
import '../App.css'; // Tell webpack that Button.js uses these styles

const axios=require("axios")


export default function Contact() {
  const submit=async(event)=>{
    event.preventDefault()
    const firstname=event.target.firstname.value
    const lastname=event.target.lastname.value
    const email=event.target.email.value
    const message=event.target.message.value
    const formData={
      firstname,
      lastname,
      email,
      message,
      

    }
    console.log(formData);
    await axios.post("http://localhost:8000/forms",formData)

   
    window.location.replace("/")

  }
  return (
    <>
    
    {/* END OF NAVBAR */}
    <h1>Contact me  here👋</h1>
    <form onSubmit={submit}> 
   
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

  
    <input id="checkbox" type="email" name="email" placeholder="Your Email.."/>
    
      <textarea className="contact-message" name="message" id="" rows="3" placeholder="Message....."></textarea>
    
   



    
   
     <button className="btn">Submit</button>
  
  </form>
  </>
  )
}
