import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/moataz-mhamdi-ba3211208" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://gmail.com" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocial