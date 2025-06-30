import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>Education</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
            return  <div key={index} className='services-format'>
                <h3>{service.s_year}</h3>
                <h2>{service.s_degree}</h2>
                <p>{service.s_place}</p>
                <p>{service.s_desc}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
