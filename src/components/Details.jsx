import React from 'react'
import './style.css'
import profile from '../images/Naveed.png'
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
   </div>
    </>
  )
}

export default Details