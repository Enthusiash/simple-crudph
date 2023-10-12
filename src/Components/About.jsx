import React from 'react'
import SideNav from '../SideNav'
import Box from '@mui/material/Box';

import Ash from '../images/Trycropped.jpg'

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
        <p>I did this to enhance my skills and for future purposes. Continue to grow, learn and explore. Be limitless!</p>
      </div>
      
      <div className="col-cardDiv">
  
      <div className="col-container">
      <img className="image" src={Ash}
      alt='Ash'></img>
      <div>
      <h2>Ashley G. Otchengco</h2>
      <h2>MERN Stack</h2>
      <a>
        <button className="btn-resume">Resume</button>
      </a>
      </div>
      </div>
      </div>
      </Box>
      </Box>
    </>
  )
}

export default About
