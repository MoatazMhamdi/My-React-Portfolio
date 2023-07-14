import React from 'react'
import './index.css'

import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Experience from './components/experience/Experience.jsx'
import Footer from './components/footer/Footer.jsx'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials.jsx'


const app = () => {
  return (
    
      <div>
      <Header/>

       <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Testimonials/>
       <Contact/>
       <Footer/>
       
       

       
    </div>
    
  )
}

export default app