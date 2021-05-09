import React from 'react'
import { Carousel } from  'react-bootstrap'


const Project1 = () => {
  return (
    <div>
      <h1>Cornhub </h1>
      <a href="https://jonty-ward.github.io/sei-project-1/" target="_blank" rel='noreferrer'> 
        <img className="link-icon-projects" src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620577132/portfolio/PinClipart.com_chain-links-clipart_989077_heae0p.png" alt="link to deployed project 4"/>
      </a>
      <a href="https://github.com/jonty-ward/sei-project-1" target="_blank" rel='noreferrer'> 
        <img className="link-icon-projects" src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620577534/portfolio/5847f98fcef1014c0b5e48c0_1_xgoimh.png" alt="link to deployed project 4 readme"/>
      </a>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620583444/portfolio/battleships%20/Screenshot_2021-05-09_at_19.02.01_kzmhxn.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620583444/portfolio/battleships%20/Screenshot_2021-05-09_at_19.02.12_apvja0.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620583443/portfolio/battleships%20/Screenshot_2021-05-09_at_19.02.27_ifabqr.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620583443/portfolio/battleships%20/Screenshot_2021-05-09_at_19.03.05_esroei.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620583443/portfolio/battleships%20/Screenshot_2021-05-09_at_19.03.49_ga2wc9.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>


      </Carousel>
      <p className="project-desciption">This first project was after our first three weeks on the course and focused on building a game in JavaScript, HTML and CSS. I chose to build a Battleships game, which allowed me to focus on conditional logic, and cement the fundamental skills we had learnt thus far. 
      </p>      
      
    </div>
  )
}

export default Project1
