import React from 'react'
import './footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="copyright">
            <p>Copyright © 2021 - 2022 - Free CSS. All Rights Reserved</p>
        </div>
        <div className="social">
            <a href="https://www.instagram.com/afridi_naved/" target='blank'>
          <InstagramIcon id="insta"/>
            </a>
            <a href="https://twitter.com/naveed_afridi99/status/1501165525426225155?s=21" target='blank'>
                <TwitterIcon id="twitter"/>
            </a>
            <a href="https://www.linkedin.com/in/naveed-ur-rehman-974054176" target='blank'>
               <LinkedInIcon id='linkedin'/>
            </a>
        </div>
    </div>
    </>
  )
}

export default Footer