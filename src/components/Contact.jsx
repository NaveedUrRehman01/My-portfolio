import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Footer from './Footer';
const Contact = () => {
   
  const form = useRef();
  const [getInfo, setInfo] = useState({
    name:'',
    email:'',
    message:'',
  });
  
  const getData = (event)=>{
    const {name, value} = event.target;
    console.log(getInfo.name, getInfo.email, getInfo.message);
    setInfo((prevalue)=>{
      return{
        ...prevalue,
        [name]: value,
        
      }
        })
  }

  const sendData = (event)=>{
    event.preventDefault();
    emailjs.sendForm('service_i7x69sb', 'template_mt8l1jn', form.current, 'MyuuJK-hzYzKn2LnP')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  setInfo({
    user_name:'',
    user_email:'',
    message:''
  })
  console.log('clck');
  }


  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_i7x69sb', 'template_mt8l1in', form.current, 'MyuuJK-hzYzKn2LnP')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

  return (
   <>
 
   <h2 id='h2'>Get In Touch</h2>
    <div className="contact">
      <div className="mailsec">
      <h2>Fell Free To Contact Us</h2>
      <p>
      Hello Everyone! Have a great day :) I am here to help you.
       If you want to know something or you have any suggestion
        then please reach me. Thank You.
      </p>
      <section>
      <p><span><TwitterIcon id="twitter"/>: @Naveed_Afridi99</span> </p>
      <p><span><LinkedInIcon id="linkedin"/>: Naveed Ur Rehman</span> </p>
      <p><span><EmailIcon id="email"/>:</span> Naveedafridi1999@gmail.com</p>
      </section>
      </div>
      <div className="formsec">
      <form ref={form}>
        <label htmlFor="">Name:  </label>
          <input type="text" 
         value={getInfo.user_name} name="user_name" onChange={getData} id="name" />
       
        <label htmlFor="">Email: </label>
          <input type="text" 
         value={getInfo.user_email} name="user_email" onChange={getData} id="Email" />
        <label>Message: </label>
        <textarea 
       value={getInfo.message} name="message" onChange={getData} id="message" cols="30" rows="6"></textarea>
        <SendIcon id="button" onClick={sendData} >Send</SendIcon>
        </form>
      </div>
      
      <Footer className='footer'/>
    </div>
   </>
  )
}

export default Contact