import React from 'react'
import './about.css'
import mot from '../../assets/mot.jpg'
import {FaAward} from 'react-icons/fa'
import {BsRocketTakeoff} from 'react-icons/bs'    
import {MdOutlineVolunteerActivism} from 'react-icons/md'  
const about = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2> About Me </h2>

     <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={mot} alt="About image" />
        </div>
        </div>

        <div className="about__content">
        <div className="about__cards">

        <articale className='about__card'>
          < FaAward className='about__icon'/>
            <h5> Experince </h5>
            <small>2+ Years Working</small>
          </articale>

        <articale className='about__card'>
          < BsRocketTakeoff className='about__icon'/>
            <h5> Projects </h5>
            <small>10+  Completed Projects</small>
          </articale>

          <articale className='about__card'>
          < MdOutlineVolunteerActivism className='about__icon'/>
            <h5> Volunteer Experience </h5>
            <small>3+ Years spend in Enactus Esprit ICT</small>
          </articale>
        </div>
      <p> 
        
        
Hi there! My name is Moataz Mhamdi, and I'm a dedicated software engineering student and passionate web developer. With a strong knowledge of React.js and Node.js, I thrive in the world of web development. I have a deep understanding of front-end development using React.js, allowing me to create dynamic and interactive user interfaces. Additionally, my expertise in Node.js empowers me to build scalable and efficient back-end systems.
As a software engineering student, I continually strive to expand my skill set and stay up-to-date with the latest industry trends. With a solid foundation in software engineering principles and a passion for creating seamless user experiences, I am committed to delivering high-quality web applications. I enjoy collaborating with teams to bring ideas to life and contribute to the success of projects.
If you're looking for a dedicated and skilled web developer to bring your vision to reality, I would be thrilled to be a part of your team. Let's work together to build exceptional web experiences that leave a lasting impression.

      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
     </div>
    </section>
  )
}

export default about