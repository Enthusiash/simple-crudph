import React from 'react'
import SideNav from '../SideNav'
import Box from '@mui/material/Box';

import Ash from '../images/Trycropped.jpg'
import Jb from '../images/Jb.jpg'

import '../Style/About.css'

const About = () => {
  return (
    <>
     <Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box id='dashboard-contents' component="main" sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>

      <div className="col-text">
        <h1>CRUD Management System</h1>
        <h3>"A stepping stone for a better future."</h3>
        <p>We did this to enhance our skills and for future purposes.</p>
      </div>
      
      <div className="col-cardDiv">
  
      <div className="col-container">
      <img className="image" src={Ash}
      alt='Ash'></img>
      <div>
      <h2>Ashley G. Otchengco</h2>
      <h2>FrontEnd</h2>
      <a>
        <button className="btn-resume">Resume</button>
      </a>
      </div>
      </div>

      <div className="col-container">
      <img className="image" src={Jb}
      alt='Jb'></img>
      <div>
      <h2>John Benedict T. Benedicto</h2> 
      <h2>BackEnd</h2>
      <a>
        <button className="btn-resume">Resume</button>
      </a>
      </div>
      </div>
      
      </div>
      {/* <div className="text">
      <h1>Management System</h1>
      <h2>"A stepping stone for a better future".</h2>
      <span>We did this to enhance our skills and for future purposes.</span>
      <h3>Continue to grow, learn and explore. Be limitless!</h3>
      </div> */}
      </Box>
      </Box>
    </>
  )
}

export default About
