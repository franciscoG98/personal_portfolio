import Navbar from '../../components/navbar'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./aboutStyles.scss"

import FCCwd from '../../assets/certificates/FCC-WD.png'
import FCCbe from '../../assets/certificates/FCC_backend.png'
import FCCjs from '../../assets/certificates/FCC-JS.png'
import Henry from '../../assets/certificates/Henry.png'
import QA from '../../assets/certificates/QA.png'

import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiBootstrap,
  DiSass,
  DiNodejsSmall,
  DiSqllite, 
  DiLinux,
  DiGit,
  DiScrum, 
  DiGithubBadge,
  DiTrello
} from "react-icons/di";
import {
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiGraphql,
  SiGatsby,
  SiContentful
} from "react-icons/si";
import { IoLogoNpm } from "react-icons/io"

SwiperCore.use([Navigation, Pagination]);

const About = () => {
  return (
    <>
        <Navbar />
        <main>
          <h2 className='about_title'>Certificates</h2>
          <Swiper
            className="swiper_container"
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="swiper_slide">
                <img
                    alt="freecodecamp web design certificate"
                    src={FCCwd}
                    className="card_image"
                />
            </SwiperSlide>
            <SwiperSlide className="swiper_slide">
                <img
                    alt="freecodecamp backend certificate"
                    src={FCCbe}
                    className="card_image"
                />
            </SwiperSlide>
            <SwiperSlide className="swiper_slide">
                <img
                    alt="freecodecamp javascript certificate"
                    src={FCCjs}
                    className="card_image"
                />
            </SwiperSlide>
            <SwiperSlide className="swiper_slide">
                <img
                    alt="henry certificate"
                    src={Henry}
                    className="card_image"
                />
            </SwiperSlide>
            <SwiperSlide className="swiper_slide">
                <img
                    alt="utn testing certificate"
                    src={QA}
                    className="card_image"
                />
            </SwiperSlide>
          </Swiper>

          <h2 className='about_title'>Technologies</h2>
          <h3 className='about_title'>Frontend</h3>
          <section className='frontend'>
            <p>
              <DiHtml5 className='about_icon' size={60} />
              <span className='about_tech'>HTML5</span>
            </p>
            <p>
              <DiCss3 className='about_icon' size={60} />
              <span className='about_tech'>CSS3</span>
            </p>
            <p>
              <DiJavascript1 className='about_icon' size={60} />
              <span className='about_tech'>Javascript</span>
            </p>
            <p>
              <DiReact className='about_icon' size={60} />
              <span className='about_tech'>React</span>
            </p>
            <p>
              <SiRedux className='about_icon' size={60} />
              <span className='about_tech'>Redux</span>
            </p>
            <p>
              <DiBootstrap className='about_icon' size={60} />
              <span className='about_tech'>Bootstrap</span>
            </p>
            <p>
              <DiSass className='about_icon' size={60} />
              <span className='about_tech'>Sass</span>
            </p>
            <p>
              <SiGatsby className='about_icon' size={60} />
              <span className='about_tech'>Gatsby</span>
            </p>
            <p>
              <SiContentful className='about_icon' size={60} />
              <span className='about_tech'>Contentful</span>
            </p>
          </section>

          <h3 className='about_title'>Backend</h3>
          <section className='backend'>
            <p>
              <DiNodejsSmall className='about_icon' size={60} />
              <span className='about_tech'>Node</span>
            </p>
            <p>
              <SiExpress className='about_icon' size={60} />
              <span className='about_tech'>Express</span>
            </p>
            <p>
              <DiSqllite className='about_icon' size={60} />
              <span className='about_tech'>SQLite</span>
            </p>
            <p>
              <SiPostgresql className='about_icon' size={60} />
              <span className='about_tech'>Postgresql</span>
            </p>
            <p>
              <SiMongodb className='about_icon' size={60} />
              <span className='about_tech'>Mongodb</span>
            </p>
            <p>
              <SiGraphql className='about_icon' size={60} />
              <span className='about_tech'>Graphql</span>
            </p>
          </section>

          <h3 className='about_title'>Tools</h3>
          <section className='tools'>
            <p>
              <DiLinux className='about_icon' size={60} />
              <span className='about_tech'>Linux</span>
            </p>
            <p>
              <DiGit className='about_icon' size={60} />
              <span className='about_tech'>DiGit</span>
            </p>
            <p>
              <DiGithubBadge className='about_icon' size={60} />
              <span className='about_tech'>Github</span>
            </p>
            <p>
              <DiScrum className='about_icon' size={60} />
              <span className='about_tech'>Scrum</span>
            </p>
            <p>
              <SiPostman className='about_icon' size={60} />
              <span className='about_tech'>Postman</span>
            </p>
            <p>
              <IoLogoNpm className='about_icon' size={60} />
              <span className='about_tech'>npm</span>
            </p>
            <p>
              <DiTrello className='about_icon' size={60} />
              <span className='about_tech'>Trello</span>
            </p>
          </section>
        </main>
    </>
  )
}

export default About