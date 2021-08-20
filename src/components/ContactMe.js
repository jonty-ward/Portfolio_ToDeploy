import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

const ContactMe = () => {
  return (
    <Container>
      <Row className="footer-row" >
        <h1>
        Contact Me:
        </h1>
        <Col xs={1} className="links footer-links">
         
          <a href="https://www.linkedin.com/in/jonathan-ward95/" target="_blank" rel='noreferrer' >
            <FiLinkedin className="hero-icons-by-profile-image"/>
            LinkedIn
          </a>
          <a href="https://github.com/jonty-ward" target="_blank" rel='noreferrer' >
            <FiGithub className="hero-icons-by-profile-image"/>
            GitHub
          </a>
          <a href="mailto:jward0395@gmail.com" target="_blank" rel='noreferrer' >
            <HiOutlineMail className="hero-icons-by-profile-image"/>
            Email
          </a>
        </Col> 
     
       
      </Row>
    </Container>
  )
}

export default ContactMe
