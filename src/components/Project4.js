import React from 'react'
import { Carousel } from  'react-bootstrap'
import { FiLink, FiGithub } from 'react-icons/fi'


const Project4 = () => {
  return (
    <div>
      <h1>Cornhub </h1>
      <a href="https://cornhubapp.herokuapp.com/" target="_blank" rel='noreferrer'> 
        <FiLink className="project-links"/> 
      </a>
      <a href="https://github.com/jonty-ward/CornHub" target="_blank" rel='noreferrer'> 
        <FiGithub className="project-links"/>       </a>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620578156/portfolio/Screenshot_2021-05-09_at_17.35.45_yosq9a.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620578400/portfolio/cornhub/Screenshot_2021-05-09_at_17.37.04_ij2pnq.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620578397/portfolio/cornhub/Screenshot_2021-05-09_at_17.37.24_dgn1lf.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620578394/portfolio/cornhub/Screenshot_2021-05-09_at_17.38.02_qug3ry.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620578390/portfolio/cornhub/Screenshot_2021-05-09_at_17.38.23_faeh55.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620578692/portfolio/cornhub/Screenshot_2021-05-09_at_17.44.38_dfhv9q.png"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620578384/portfolio/cornhub/Screenshot_2021-05-09_at_17.38.57_aq0zcv.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>


      </Carousel>
      <p className="project-desciption">Over the course of a week we built a full-stack app with a React front end and a Python / Django / PostgreSQL back end. Our app was built to provide detailed gardening information that was searchable and accessible. We were able to integrate many additional features, such as CRUD functionality, authentication, reminders, PayPal integration and weather information. We worked on many of the more challenging aspects of the project as a group which gave me a great opportunity to develop my skills in problem solving as part of a team. In addition to the collaborative work, I focussed on integrating the OpenWeatherMap API and PayPal into the app.</p>
    </div>
  )
}

export default Project4
