import React from 'react'
import { Carousel } from  'react-bootstrap'
import { FiLink, FiGithub } from 'react-icons/fi'


const Project2 = () => {
  return (
    <div>
      <h1 className="project-title">Lord of the Rings Quiz </h1>
      <a href="https://lotr-quiz.netlify.app/" target="_blank" rel='noreferrer'> 
        < FiLink className="project-links"/>
      </a>
      <a href="https://github.com/jonty-ward/sei-project-2" target="_blank" rel='noreferrer'> 
        <FiGithub className="project-links"/>

      </a>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620582881/portfolio/LOTR%20Quiz/Screenshot_2021-05-09_at_18.53.03_sxc3iv.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620582888/portfolio/LOTR%20Quiz/Screenshot_2021-05-09_at_18.53.12_cac7vi.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620582900/portfolio/LOTR%20Quiz/Screenshot_2021-05-09_at_18.53.42_fcaebf.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620582898/portfolio/LOTR%20Quiz/Screenshot_2021-05-09_at_18.53.32_tdtscp.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620582897/portfolio/LOTR%20Quiz/Screenshot_2021-05-09_at_18.53.51_ylkewe.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>


      </Carousel>
      <p className="project-desciption"> In a 48 hour Hackathon themed project, we built a quiz app in React using The One API to build a Lord of the Rings themed quiz. We built the majority of the project by pair coding. I really enjoyed coding in a pair, particularly having someone to talk through some of the problems we encountered. With the work being done as a pair, the majority of the work was done collaboratively on the first quiz, and then I focused on the second quiz independently. </p>
      
      
    </div>
  )
}

export default Project2
