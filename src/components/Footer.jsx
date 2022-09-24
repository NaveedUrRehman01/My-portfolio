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
            <a href="http://" target='blank'>
          <InstagramIcon id="insta"/>
            </a>
            <a href="http://" target='blank'>
                <TwitterIcon id="twitter"/>
            </a>
            <a href="http://" target='blank'>
                <FacebookIcon id="facebook"/>
            </a>
            <a href="http://" target='blank'>
               <LinkedInIcon id='linkedin'/>
            </a>
        </div>
    </div>
    </>
  )
}

export default Footer