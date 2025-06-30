import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import github from '../../assets/gitlogo.webp'
import linkdin from '../../assets/linkedin.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5ddddd6f-3354-4b98-a40a-b4dd9f080b2f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div onSubmit={onSubmit} id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>prashantbansal2005@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>9354143738</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Ghaziabad, UP</p>
                </div>
                <div className="contact-logo">
                  <a href="https://www.linkedin.com/in/prashantbansal1" target="_blank">
                    <img src={linkdin} alt="LinkedIn Logo" className="logo" />
                  </a>
                  <a href="https://github.com/prashant2232" target="_blank">
                    <img src={github} alt="GitHub Logo" className="logo" />
                  </a>
                </div>
            </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
            <button  type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
