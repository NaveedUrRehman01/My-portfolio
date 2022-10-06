import React from 'react'
import './details.css'
import profile from '../images/Naveed.png'
import Button from 'react-bootstrap/Button';


const Details = () => {
  return (
    <>
    <div className="details">
      <div><img src={profile} alt="Naveed" id='proimg' /></div>
   <div className="profile">
   <p className='name'>Hello, I'm </p> 
   <p className='name' id='pn'> Naveed Afridi </p> 
   <p className='name'> Frontend Web Developer</p>
   </div>
   <div className="btns">
  <a href="/Contact">
    {/* <Button variant='primary'>Hire me</Button> */}
    <button>Hime Me</button>
  </a>
  <a href="/Resume">
  <Button variant="outline-info">Get CV</Button>
  </a>
    </div>
   </div>
   
    </>
  )
}

export default Details