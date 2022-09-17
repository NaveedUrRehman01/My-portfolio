import React from 'react'
import './contact.css'

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
        then please mail me. Thank You.
      </p>
      <section>
      <p><span>twitter:</span> </p>
      <p><span>linkden:</span> </p>
      <p><span>Email:</span> Naveedafridi1999@gmail.com</p>
      </section>
      </div>
      <div className="formsec">
        <label htmlFor="">Name: 
          <input type="text" name="Name" id="name" />
        </label>
        <label htmlFor="">Email: 
          <input type="text" name="Name" id="name" />
        </label>
        <textarea name="message" id="message" cols="30" rows="6"></textarea>
        <button>Send</button>
      </div>
    </div>
   </>
  )
}

export default Contact