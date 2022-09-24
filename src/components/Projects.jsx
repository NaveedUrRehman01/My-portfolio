import React from 'react'
import MultiActionAreaCard from '../components/Card'
import './project.css'
import image from '../images/github.jpg'
import ratingimg from '../images/InteractiveRatingComponent.jpg'
import Footer from './Footer';
import data from './Data'
const Projects = () => {

  
 
  
  return (
    <>
    <div className="heading">
    <h2 id='h2'>List of Projects</h2>
    </div>
    <div className="projects">
    {
      data.map((ldata, index)=>{
        console.log(ldata.imageSrc);
        return(
<MultiActionAreaCard key={index} name={ldata.name} pname={ldata.title} image={ldata.imageSrc} 
 link={ldata.link} details={ldata.details}  className="card"/>
        )
      })
 
    }
   
    </div>
    <br />
    <Footer id="footer"/>
   
    </>
  )
}

export default Projects