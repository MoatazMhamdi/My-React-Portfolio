import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>  
    <h2> My Experiences</h2>

    <div className="container experience__container">
      <div className="experience__programming-tools">
        <h3> Programming Languge</h3>
        <div className="experience__content">
          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"  />
             <div>
             <h4> Java</h4>
             <small className="text-light">Experienced</small>
             </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon" />
             <div>
             <h4> JavaScript</h4>
             <small className="text-light">Experienced</small>
             </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon" />
             <div>
             <h4> Python</h4>
             <small className="text-light">Intermediate</small>
             </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon" />
             <div>
             <h4> C</h4>
             <small className="text-light">Experienced</small>
             </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4> C++</h4>
             <small className="text-light">Experienced</small>
            </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4> PHP</h4>
             <small className="text-light">Experienced</small>
             </div>
          </article>
        </div>
      </div>

      {/*     END OF PROGRAMMING LANGUGE        */}
      <div className="experience__framework">
      <h3> FrameWork</h3>
        <div className="exeperience__content">


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4> ReactJS</h4>
             <small className="text-light">Experienced</small>
            </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4> Angular</h4>
             <small className="text-light">Intermediate</small>
             </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4> SpringBoot</h4>
             <small className="text-light">Intermediate</small>
             </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4> SpringBoot</h4>
             <small className="text-light">Intermediate</small>
              </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4> Symfony</h4>
             <small className="text-light">Experienced</small>
             </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4> QT</h4>
             <small className="text-light">Exprienced</small>
             </div>
          </article>
        </div>
      </div>

      {/*    END OF FRAMEWORK     */}
     <div className="experience__database">
     <h3> DataBase</h3>
     <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4> MySQL</h4>
             <small className="text-light">Experienced</small>
             </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4> ORACLE</h4>
             <small className="text-light">Experienced</small>
            </div>
          </article>


          <article className="experience__details">
             <BsFillPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4> MONGO DB</h4>
             <small className="text-light">Exprienced</small>
             </div>
          </article>

        </div>

     </div>
    
      
    </section>
  )
}

export default experience