import React from 'react'
import { Carousel } from  'react-bootstrap'
import { FiLink, FiGithub } from 'react-icons/fi'


const Project3 = () => {
  return (
    <div>
      <h1 className="project-title">The Natural Wanderer </h1>
      <a href="https://natural-wanderer.netlify.app/" target="_blank" rel='noreferrer'> 
        <FiLink className="project-links"/>     
      </a>
      <a href="https://github.com/jonty-ward/SEI-Project-Three" target="_blank" rel='noreferrer'> 
        <FiGithub className="project-links"/>      
      </a>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620580059/portfolio/natural%20wanderer/Screenshot_2021-05-09_at_17.58.18_k82rxp.png"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>Scroll through some screenshots, or visit the site</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620580061/portfolio/natural%20wanderer/Screenshot_2021-05-09_at_17.58.41_vikbeo.png"
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620580058/portfolio/natural%20wanderer/Screenshot_2021-05-09_at_17.58.57_kxsrvk.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620580056/portfolio/natural%20wanderer/Screenshot_2021-05-09_at_17.59.39_svydnk.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620580056/portfolio/natural%20wanderer/Screenshot_2021-05-09_at_17.59.57_ynl0sy.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620580056/portfolio/natural%20wanderer/Screenshot_2021-05-09_at_18.01.03_tyj00p.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620580056/portfolio/natural%20wanderer/Screenshot_2021-05-09_at_18.01.23_tg3lgk.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620580056/portfolio/natural%20wanderer/Screenshot_2021-05-09_at_18.07.14_ov606p.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

      </Carousel>
      <p className="project-desciption">Over the course of a week, we built a full stack MERN app with CRUD functionality. We based our project on the outdoors, and National Parks around the world. We divided the work up so that we all worked with the full stack. I focused on user interaction, displaying data from our database and integrating external APIs into the project. This was a great opportunity to practice Full Stack building, and working with group Git. </p>
    </div>
  )
}

export default Project3
