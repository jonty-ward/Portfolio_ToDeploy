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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620813634/portfolio/interests/CF9932AD-FFAD-4F37-8457-2B335C7EDBDA_1_105_c_q7p5uh.jpg"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1620740744/portfolio/interests/4FD72C42-7B6F-40AE-B209-2FFF13EAACDC_1_105_c_phjqed.jpg"
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620813713/portfolio/interests/DB9BD4D0-C091-407C-8CA4-D56DF8275DAE_1_105_c_jtgbld.jpg  "
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
            src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620813579/portfolio/interests/5A9A81CA-D3C6-4D8C-8470-32C300EFD360_1_105_c_fzj7nb.jpg"
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
