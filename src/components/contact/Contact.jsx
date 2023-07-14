import React, { useRef } from 'react';
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3s2kcsf', 'template_qvbootj', form.current, 'w6GCfgkU_W0866DgB')
    e.target.reset();
    
  };

  return (
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>moataz.mhamdi@esprit.tn</h5>
            <a href="mailto:moataz.mhamdi@esprit.tn" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Motaz Mhamdi</h5>
            <a href="https://m.me//CHILA03" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+21625049802</h5>
            <a href="https://api.whatsapp.com/send?phone+21625049802" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
           <input type="email" name='email' placeholder='Your Email' required />
           <textarea name='message' rows="7" placeholder='Your Message' required></textarea>     
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact