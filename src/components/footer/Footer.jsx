import React from 'react'
import './footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {FaTwitter} from 'react-icons/fa'
import {BiLogoLinkedin} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Quotes</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/CHILA03/"><BiLogoFacebook /></a>
        <a href="https://twitter.com/Mhamdi_Motaz"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/moataz-mhamdi-ba3211208/"><BiLogoLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Moataz Mhamdi Portfolio, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer