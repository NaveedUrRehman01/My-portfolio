import React from 'react'
import PrintIcon from '@mui/icons-material/Print';
import './resume.css'
import Footer from './Footer';

const Resume = () => {

 function print(){
  window.print();
 }
 
  return (
    <>
   <div className="resume">
   {/* <button  id='print'>Print this page</button> */}
    <PrintIcon id="print" onClick={print}  />
    <div className="intro">
      <h1 id="name">Naveed Ur Rehman</h1>
      <p className="address">Amjad Electronics shop no 17, Block <br /> A Shaheen 
Shopping Plaza Karkhano Market Peshawar
</p>
<a href="/" className="email">Naveedurrehman2018@gmail.com</a>
<p className="phob">(+92)3489156574</p>
    </div>
    <div className="objective">
      <h2>Career Objective</h2>
      <p className="summary">
      Fresh graduate of computer science looking for a role where I 
      can grow and learn from experienced team members to build responsive 
      and scalable web apps to solve problems that delight end-users.
      </p>
    </div>
    <div className="skills">
      <h2>Skills</h2>
      <ol>1.	Technical Skills</ol>
      <li>JavaScript | C++ | React Js |
         React Native | HTML | CSS | Material UI |
          Bootstrap | Basic Networking</li>
      <ol>2.	Personal Skills</ol>
      <li>Highly organized and efficient</li>
      <li>	Ability to work independently or as a team player</li>
      <li>	Exceptional communication skills (written and verbal)</li>      
    </div>
    <br />
    
    <h2 id='education'>Education</h2>
    <div className="institute">   
        <div className="university">
        <div className="uni">
        <h4>University Engineering & Technology</h4>
        <h6>Computer Science & Information Technology(BS)</h6>
        <p>CGPA: 3.12</p>
        </div>
        <div className="unidate">
        <h4>Peshawar Pakistan</h4>
        <p>2017-2021</p>
        </div>
        </div>
      <div className="college">
      <div className="clg">
        <h4>Government College Peshawar</h4>
        <h6>Higher Secondary School Certificate (Pre-Engineering)	</h6>
        <p>Grade: A</p>
        </div>
       <div className="clgdate">
       <h4>Peshawar Pakistan</h4>
        <p>2015-2017</p>
       </div>
      </div>
        
        <div className="school">
        <div className="scl">
        <h4>The Bagram Model School</h4>
        <h6>Secondary School Certificate	</h6>
        <p>Grade: A-1</p>
        </div>
       <div className="scldate">
       <h4>Peshawar Pakistan</h4>
        <p>2013-2015</p>
       </div>
        </div>
       </div>
       <h2>Certificates</h2>
    <div className="certification">
      <div className="web_development">
        <div className="certname">
        <h4>1.	The Complete Front-End Web Development Course! </h4>
        <a href="https://www.udemy.com/certificate/UC-af4d46d5-58c1-4047-8e2f-44b7db8735fc/"> 
        Click here to Show Certificate</a>
          </div>
        <div className="certdate"><p>06/2020 - 07/2020 </p>
      </div>
      </div>
      <div className="git">
      <div className="certname">
      <h4>2.Git & GitHub For Beginners - Master Git and <br /> GitHub (2021) </h4>
      <a href="https://www.udemy.com/certificate/UC-d4466caf-5924-44ea-a02b-d40d2d5699cd/"> 
      Click here to Show Certificate</a>
      </div>
      <div className="certdate">
      <p>08/2022 - 09/2022</p>
      </div>
      </div>
      <div className="shopify">
      <div className="certname">
      <h4>3. Create your e-commerce store with shopify </h4>
      <a href="https://coursera.org/share/cbf4bdfae29001ff7d461373be78edf3"> 
      Click here to Show Certificate</a>
      </div>
      <div className="certdate">
      <p>03/2022 - 03/2022 </p>
      </div>
      </div>
    </div>
    <h2>Short Courses</h2>
    <div className="short_courses">
      <div className="course">
      <div className="course_js">
      <h4>1.	Course for beginner JS </h4>
      </div>
      <div className="date">
      <p>05/2020 - 05/2020 </p>
      </div>
      </div>
      <div className="course">
      <div className="course_web">
      <h4>2.	Learn to code for the web </h4>  
      </div>
      <div className="date">
      <p>04/2020 - 04/2020</p>
      </div>
      </div>
    </div>
    <h2 id='intership'>Internship</h2>
    <div className="experience">
      <div className="internship">
      <h4>Software Engineer & IT Assistant</h4>
      <p>
        (Stanley Pharma Industrial Area Hayatabad, Peshawar)
      </p>
      </div>
      <div className="interdate">
      <p>01/2022 - 06/2022</p>
      </div>
    </div>
    <div className="hobbies">
      <h2>Hobbies</h2>
      <ul>
        <li>Coding,</li>
        <li>Cricket,</li>
        <li>Traveling,</li>
        <li>Social Media,</li>
        <li>Volunteer activities</li>
      </ul>
    </div>
    <div className="lang">
      <h2>Languages</h2>
      <ul>
        <li>Urdu,</li>
        <li>Pashto,</li>
        <li>English</li>
      </ul>
    </div>
   </div>
   <Footer/>
    </>
  )
}

export default Resume