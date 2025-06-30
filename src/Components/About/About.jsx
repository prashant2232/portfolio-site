import React from 'react'
import './About.css'
import profile_img2 from '../../assets/profile-pic2.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img2} alt="" className='profile_img2' />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a developer passionate about building end-to-end solutions that combine clean design with smart functionality. From full-stack web apps to AI-powered tools, I enjoy solving real-world problems through code. I’ve worked with technologies like React, Node.js, MongoDB, OpenCV, and TensorFlow.</p>
            <p>I love exploring the intersection of web development and artificial intelligence. Whether it's crafting responsive UIs or deploying intelligent models, I'm always eager to learn and create.</p>
          </div>
          <div className="about-skills-grid">
  <ul>
    <li>Python</li>
    <li>C/C++</li>
    <li>JavaScript</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>React.js</li>
    <li>MySQL</li>
    <li>MongoDB</li>
    <li>TensorFlow</li>
    <li>OpenCV</li>
  </ul>
</div>

        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>CERTIFICATIONS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>INTERNSHIPS</p>
        </div>
      </div>
    </div>
  )
}

export default About
