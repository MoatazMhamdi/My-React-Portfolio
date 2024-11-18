import React from 'react'
import CV from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <><div className='cta'></div>
    <a href={CV} download className='btn'> Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </>
  )
}

export default CTA