import React from 'react'
import './contact.css'
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Footer from './Footer';
const Contact = () => {
  return (
   <>
 
   <h2>Get In Touch</h2>
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
        <label htmlFor="">Name:  </label>
          <input type="text" name="Name" id="name" />
       
        <label htmlFor="">Email: </label>
          <input type="text" name="Name" id="name" />
        <label>Message: </label>
        <textarea name="message" id="message" cols="30" rows="6"></textarea>
        <SendIcon id="button">Send</SendIcon>
      </div>
      <Footer/>
    </div>
   </>
  )
}

export default Contact