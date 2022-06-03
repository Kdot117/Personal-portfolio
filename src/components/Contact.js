import React, { useRef } from 'react';
import emailjs from "emailjs-com";


export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
     'service_erj1r2s',
     'template_5zptj1f',
      form.current,
     '3Qw7pAuHU0bNzFwJW'
     )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className='contact-me' id="footer">
      <h1> Contact Me </h1>

      <div id="contact-container">
        <div className="contact-info">
          <h4>
            Contact information
          </h4>
          <p>You can reach me with the information given below:</p>

          <div className="icon-text">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span> 704-685-5194</span>
          </div>

          <div className="icon-text">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span> Kendrick.Izaguirre@yahoo.com</span>
          </div>

          <div className="icon-text">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span> Charlotte, NC</span>
          </div>

          <div className="social-media">
            <div href="#" className='icon-circle'>
              <i className='icon'></i>
            </div>
          </div>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className='col'>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="name"/>
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="name"/>
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input type="email" name="email" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone"/>
            </div>

            <div className='col'>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message"/>
            
          </div>
        </div>

          <div className='col-2'>
            <div className="form-group">
            <input type="submit" value="Send" />
            
            </div>
          </div>
        </div>

        
        </form>

  
        </div>
    </div>
  )
}
