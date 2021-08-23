import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

const ContactMe = () => {
  return (
    <Container >
      <Row className="footer-row contact-me-header-text" >
        <h1>
        Contact Me:
        </h1>

        <h5>
          If you want to get in touch, reach out via the links below!
        </h5>
        
        <Container className="contact-me-items">
          <Col xs={1} className="links footer-links" >
         
            <a href="https://www.linkedin.com/in/jonathan-ward95/" target="_blank" rel='noreferrer' className="contact-me-link" >
              <FiLinkedin className="hero-icons-by-profile-image"/>
            LinkedIn
            </a>
            <a href="https://github.com/jonty-ward" target="_blank" rel='noreferrer' className="contact-me-link" >
              <FiGithub className="hero-icons-by-profile-image"/>
            GitHub
            </a>
            <a href="mailto:jward0395@gmail.com" target="_blank" rel='noreferrer' className="contact-me-link">
              <HiOutlineMail className="hero-icons-by-profile-image"/>
            Email
            </a>
          </Col> 
        </Container>
     
       
      </Row>
    </Container>
  )
}

export default ContactMe
