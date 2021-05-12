import React from 'react'
import { Carousel } from  'react-bootstrap'

const HeroCarousel = () => {
  return (
    <div>
      
      <Carousel className="hero-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620740566/portfolio/interests/98B4E4FA-EAC0-44B1-9DBC-1DFED1795CA8_1_105_c_d8chp5.jpg"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1617181381/sei_project_3/t2nicgytkd0dkyhv8c0q.jpg"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

 

   

   



      </Carousel>
            
      
    </div>
  )
}

export default HeroCarousel
