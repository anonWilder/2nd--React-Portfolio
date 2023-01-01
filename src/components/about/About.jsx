import React from 'react'
import './about.css'
import ME from "../../assets/me4back.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
           <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>80+ Completed Projects</small>
            </article>
           </div>

           <p>
           Hi there! My name is Egbonu Kenechukwu and I am a multi-talented individual with a diverse range of skills and interests. I am currently a front-end developer for RESBROTHERx( 🌍 ) and a technical writer✍, as well as a science teacher👨‍🔬 and a software engineering student👨‍💻 at ALX_AFRICA. With a strong background in computer science and a passion for creating user-friendly and visually appealing websites, I am dedicated to continuously learning and improving my skills as a developer. Thank you for visiting my portfolio website, and I hope you find my projects to be both informative and enjoyable.
           </p>

           <a href="#contact" className='btn btn-primary'>Lets Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About