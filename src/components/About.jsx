import React from 'react'
import Navigationbar from './Navigationbar'
import profileImg from '../images/profileImg.jpeg'
import './about.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
  return (
    <>
    <div className="heading">
      <h2>Hi! I'm Naveed Ur Rehman and here's my story...</h2>
    </div>
    <div className="main">
      <div className='image'>
      <img src={profileImg} alt="profile-img" />
      </div>
      <div className="intro">
      <p> I Started my BS in computer from UET Peshawar in 2017 and graduated in 2021 with zero skills in coding. After graduation 
        i started coding in 2021 at the age of 22. I became a frontend developer & good reader in 2023.
I was quite weak and disappointed but pratice and consistency made me good enough to work on any frontend site.
 I will show people that they don't have to be a straight A student or a genius to learn to code.
  I break down complex concepts and try to implement them in projects</p>
      </div>
  
    </div>

    <div className="social_accounts">
    <a href="https://github.com/NaveedUrRehman01/GithubUserSearchApp.git" target="_blank" >
    <GitHubIcon className='acc' id='github'/>
</a>
    <a href="https://www.instagram.com/afridi_naved/" target="_blank" >
    <InstagramIcon className='acc' id='insta'/>
</a>
    <a href="https://twitter.com/naveed_afridi99/status/1501165525426225155?s=21" target="_blank" >
    <TwitterIcon className='acc' id='twitter'/>
</a>
    <a href="https://www.linkedin.com/in/naveed-ur-rehman-974054176" target="_blank" >
    <LinkedInIcon className='acc' id='linkedin'/>
</a>
        
          
    </div>

    </>
  )
}

export default About