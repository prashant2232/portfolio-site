import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest Work</h1>
      </div>
      <div className="mywork-container">
         {mywork_data.map((work, index) => (
         <a 
           key={index} 
           href={work.w_link} 
           target="_blank" 
           rel="noopener noreferrer" 
           className="work-item"
         >
         <img src={work.w_img} alt={`project-${index}`} />
      <div className="hover-text">Click for GitHub repo</div>
    </a>
  ))}
</div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
