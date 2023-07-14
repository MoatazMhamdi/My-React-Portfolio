import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatars.jpg'
import AVTR2 from '../../assets/avatarn.jpg'
import AVTR3 from '../../assets/avatarl.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>WISE MAN ONCE SAID</h5>
      <h2>Quotes</h2>
      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={AVTR1} alt="Aavatar one" />
        </div>
        <h5 className="client__name">Steve Jobs</h5>
          <small className="client__review">
            The only way to do great work is to love what you do.
           
          </small>
      </SwiperSlide>

      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={AVTR2} alt="Aavatar two" />
        </div>
        <h5 className="client__name">Nelson Mandela</h5>
          <small className="client__review">
          A real leaders uses every issue, no matter how serious and sensitive, 
          to ensure that at the end of the debate 
          we should emerge stronger and more united than ever before. 
           
          </small>
      </SwiperSlide>

      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={AVTR3} alt="Aavatar three" />
        </div>
        <h5 className="client__name">Monkey D luffy</h5>
          <small className="client__review">
          Power Isn’t Determined By Your Size, But By The Size Of Your Heart And Dreams.
         
          </small>
      </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials