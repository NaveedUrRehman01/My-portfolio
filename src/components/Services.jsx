import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import SourceIcon from '@mui/icons-material/Source';
import AssistantIcon from '@mui/icons-material/Assistant';
import Footer from './Footer';
import './services.css'
const Services = () => {
  return (
   <>
   <h1 id='h1'>What do we Offer</h1>
    <div className="services">
      <section id='level'>
        <label>HTML</label> <br />
        <div value='90' max='100' id='html'></div>
        <br />
        <label>CSS</label> <br />
        <div value='70' max='100' id='css'></div> <br />
        <label>JS</label> <br />
        <div value='60' max='100' id='js'></div> <br />
        <label>REACT</label> <br />
        <div value='50' max='100' id='react'></div> <br />
        <label>JQUERY</label> <br />
        <div value='40' max='100' id='jquery'></div> <br />
      </section>
      <section id='sec'>
      <div className="web">
        <div className="logo">
            <CodeIcon id="code"/>
        </div>
        <div className="content">
          <h3>Web Developer</h3>
          <p>Build, Organize & Collaborate on Work in 
            One Place from Virtually Anywhere.</p>
        </div>
      </div>
      <div className="writing">
        <div className="logo">
        <SourceIcon id='source'/>
        </div>
        <div className="content">
        <h3>Content Writer</h3>
          <p>Rightly Written, Pepper Content,
            Text Workers, ContentWriters,
            Content Market<br />place</p>
        </div>
      </div>
      <div className="VA">
        <div className="logo">
          <AssistantIcon id='assistant'/>
        </div>
        <div className="content">
          <h3>Virtual Assistant</h3>
          <p>We specialize n offering graphic design,marketing services,bookkeeping,social<br /> media, and blog writing.</p>
        </div>
      </div>
      </section>
      <Footer/>
    </div>
   </>
  )
}

export default Services