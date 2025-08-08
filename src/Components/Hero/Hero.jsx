import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile-pic.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='hero-image' />
      <h1><span>Hello, I'm Prashant,</span> a Full-Stack Developer and AI enthusiast</h1>
      <p>building smart, scalable, and user-focused digital solutions.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <a 
          className="hero-resume"
          href="https://drive.google.com/file/d/1k5lsAB8q6-OdyfbjglMAc3doNS368q50/view?usp=sharing"
          target="_blank" 
          rel="noopener noreferrer"
        >
          My resume
        </a>
      </div>
    </div>
  )
}

export default Hero

