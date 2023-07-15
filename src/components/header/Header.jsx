import React from 'react'
import './header.css'
import CTA from './CTA'
//import ME from '../../assets/me.png'
import ME from '../../assets/avatar.png'


import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <div className='me'>
        <img src={ME} alt="ME"/>
        </div>
      <h5>Hello I'm</h5>
      <h1>Moataz Mhamdi</h1>
      <h5 className="text-align">FullStack Developer</h5>
      <CTA/>
      <HeaderSocial />
      

        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header