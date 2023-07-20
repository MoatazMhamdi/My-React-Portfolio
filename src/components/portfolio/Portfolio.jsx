import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
   

      
      <div className="container portfolio__container">


      <article className="portfolio__item">
          <img src={IMG4} alt='' />
          <div className="portfolio__item-image">
            <h3>To Do List</h3>
            <a href="https://github.com/MoatazMhamdi/Desktop-Apllication" className="btn" target='_blank'>Github</a>
            <a href="https://todolist-qs41.onrender.com/" className="btn btn-primary" target='_blank'>Live demo</a>
          
          </div>
        </article>


        <article className="portfolio__item">
          <img src={IMG1} alt='' />
          <div className="portfolio__item-image">
            <h3>Gym WebSite</h3>
            <a href="https://github.com/MoatazMhamdi/Gym-web" className="btn" target='_blank'>Github</a>
          
          </div>
        </article>

        <article className="portfolio__item">
          <img src={IMG2} alt='' />
          <div className="portfolio__item-image">
            <h3>ByteHive WebSite</h3>
            <a href="https://github.com/MoatazMhamdi/ByteHve-web-application" className="btn" target='_blank'>Github</a>
          
          </div>
        </article>

        <article className="portfolio__item">
          <img src={IMG3} alt='' />
          <div className="portfolio__item-image">
            <h3>ByteHive Desktop Application</h3>
            <a href="https://github.com/MoatazMhamdi/Desktop-Apllication" className="btn" target='_blank'>Github</a>
          
          </div>
        </article>

       
      </div>
    </section>
  )
}

export default Portfolio