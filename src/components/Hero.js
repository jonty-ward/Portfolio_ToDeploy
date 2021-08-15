import React from 'react'
import { Col, Row, Image, Jumbotron, Container } from 'react-bootstrap'
// import HeroCarousel from './HeroCarousel'
import ScrollButton from './ScrollButton'

const Hero = () => {
  return (
    <div>
      <Jumbotron className="hero" fluid>
        <div className="hero-image-caption">
          <Row className="hero-mobile">


            <Col xs={1} className="links">
         
              <a href="https://www.linkedin.com/in/jonathan-ward95/" target="_blank" rel='noreferrer'>
                <Image src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1625061454/portfolio/linkedin-round_agl8ts.png" />
              </a>
              <a href="https://github.com/jonty-ward" target="_blank" rel='noreferrer'>
                <Image src="https://icons-for-free.com/iconfiles/png/512/github+icon-1320168274457504277.png" />
              </a>
              <a href="mailto:jward0395@gmail.com" target="_blank" rel='noreferrer'>
                <Image src="https://cdn2.iconfinder.com/data/icons/everything-but-the-kitchen-sink-filled/100/common-31-512.png" />
              </a>
            </Col>
            <Col xs={6} md={4}>
              <Image className="profile-image" src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1617181381/sei_project_3/t2nicgytkd0dkyhv8c0q.jpg" rounded />
            </Col>
          </Row>

          <div className = "hero-text-div">
            <h1 className="hero-text"> Hi I&apos;m Jonty.
            </h1>
            <h2>
            I&apos;m a Junior Software Developer based in Birmigham.
            </h2>
          </div>
        </div>        
        <Container className="scroll-button">
          <ScrollButton/>
        </Container> 
   
        
      

      </Jumbotron>

       
       
    

    </div>
  )
}

export default Hero
