import React, {useState} from 'react';
import '../App.css'; // Tell webpack that Button.js uses these styles
import axios from 'axios';


export default function Contact() {
  // const submit=async(event)=>{
  //   event.preventDefault()
  //   const firstname=await event.target.firstname.value
  //   const lastname=await event.target.lastname.value
  //   const email=await event.target.email.value
  //   const message=await event.target.message.value
  //   const formData=await {
  //     firstname,
  //     lastname,
  //     email,
  //     message
  //   }
  //   console.log(formData);
  //  axios.post("http://localhost:6000/forms",formData).then((res)=>{
  //    console.log(res)
  //   //  window.location.replace("/")
  //   }).catch(err=>console.log(err))}

  const[contact, setContact] = useState({});

  const changeHandler = function(e){
    setContact({...contact, [e.target.name]: e.target.value})
  }

  const submitHandler = function(e){
    e.preventDefault();
console.log('request sent')
    axios({
      method: 'post',
      url: 'http://localhost:5000/forms',
      /* baseURL: 'http://localhost:5000',*/
      data: contact 
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    });

       window.location.replace("/")
    // fetch('http://localhost:5000/').then(res=>res.json()).then(json=>console.log(json)).catch(err=>{console.log(err)})
  }


  return (
    <>
    
    {/* END OF NAVBAR */}
    <h1>Contact me  here👋</h1>
    <form onSubmit={submitHandler}> 
   
    <input type="text" id="fname" name="firstname" onChange={changeHandler} placeholder="Your name.."/>

    
    <input type="text" id="lname" name="lastname" onChange={changeHandler} placeholder="Your last name.."/>

  
    <input id="checkbox" type="email" name="email" onChange={changeHandler} placeholder="Your Email.."/>
    
      <textarea className="contact-message" onChange={changeHandler} name="message" id="" rows="3" placeholder="Message....."></textarea>
    
   



    
   
     <button className="btn">Submit</button>
  
  </form>
  </>
  )
}
