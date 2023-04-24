import React from 'react'
import '../Style/sampleSidebar.css'

const SampleSidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <h1>ADMIN</h1>
      </div>
      <div className="divList">
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
        </ul>
      </div>
      <div className='sidebar-footer'>
        <a href="#">Logout</a>
      </div>
    </div>
  )
}

export default SampleSidebar
