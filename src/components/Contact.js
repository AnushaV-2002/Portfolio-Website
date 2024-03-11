import React from "react";
import "../css/contact.css"
import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

function Contact(){
  const form = useForm()
  const {register, control, handleSubmit, formState,reset}=form;
  const {errors,isSubmitting,isDirty,isValid}=formState;

//Handling the form Data
const onSubmit=async function(data){
  //Sending the Queries Details to store in the database 
 
  try {
   console.log(data)
   const headers = {
     'Content-Type': 'application/json',
   };
   
   const config = {
     headers: {
       ...headers
     }
   }
   
   const response= await axios.post('https://promanagehub.onrender.com/api/query',data,config)
   if(response.status===200){
    reset()
    toast.success('We have recieved your query, we will get back to you soon...');
   }
  } catch (error) {
   // Handle network errors, request cancellation, etc.
   console.error('Error:', error);
   toast.error('An error occurred. Please try again later!')
 
  }
 
}
    return(
      <section id="contact">
       <div className="contact_me_container">
        <h2 className="contact_me_heading">Contact Me</h2>
        <div className="contact_me_layout">
          <div className="contact_me_social_links">
            <h4 style={{textAlign: "center"}}>Stay Connected!</h4>
            <div className="buttons_wrapper">
                    <button className="clickable_btn">
                        <a
                            href="https://linkedIn.com/anushaviswanathan"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#333333" }}
                        >
                            <FaLinkedin className="linkedIn" size={32} />
                        </a>
                    </button>
                   <button className="clickable_btn" style={{fontWeight: "bold"}}>
                   <a href="mailto:anushaviswanathan56910@gmail.com" style={{ color: "#333333", textDecoration: "none" }}>
                      <AiOutlineMail size={24} /> Mail me 
                   </a>
                   </button>
                </div>
          </div>
          {/* <img src={Message} style={{width: "50px", height:"50px"}}/> */}
          <div className="contact_form_container">
            <h4 style={{textAlign: "center"}}>Drop Me a Message</h4>
              <form  onSubmit={handleSubmit(onSubmit)} noValidate>
                  <input className="contact_us_input" type="text" {...register("contact_Name",{
                    required:{
                      value:true,
                      message:"Name field is required"
                    } 
                  })} id="contact_Name" placeholder="Enter Your Name"/>
                 {errors.Name&&<p className="error">{errors.contact_Name?.message}</p>}
                  <input type="email" className="contact_us_input" {...register("contact_Email",{
                     pattern:{
                       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                       message: "Enter Valid Email"
                      },
                     required:{
                       value:true,
                       message:"Email field is required"
                      } 
                  })} id="contact_Email" placeholder="Enter Your Email"/>
                 {errors.Name&&<p className="error">{errors.contact_Email?.message}</p>}
                  <textarea {...register("Query",{
                     required:{
                     value:true,
                     message:"Query field is required"
                    } 
                 })} id="Query" placeholder="Enter Your Message"></textarea>
                 {errors.Name&&<p className="error">{errors.Query?.message}</p>}
                 <button disabled={!isDirty||isSubmitting}>Send</button>
              </form>

            <ToastContainer position="bottom-left" />
        </div>
        </div>
       
       </div>
    </section>
    )
}

export default Contact;