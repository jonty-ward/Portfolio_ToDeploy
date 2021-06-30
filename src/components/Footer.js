import React from 'react'
import { Jumbotron,Row, Image, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <Jumbotron className="footer ">
      <Row className="footer-row" >
        <Col xs={1} className="links footer-links">
         
          <a href="https://www.linkedin.com/in/jonathan-ward95/" target="_blank" rel='noreferrer'>
            <Image src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1625061454/portfolio/linkedin-round_agl8ts.png" />
            LinkedIn
          </a>
          <a href="https://github.com/jonty-ward" target="_blank" rel='noreferrer'>
            <Image src="https://icons-for-free.com/iconfiles/png/512/github+icon-1320168274457504277.png" />
            GitHub
          </a>
          <a href="mailto:jward0395@gmail.com" target="_blank" rel='noreferrer'>
            <Image src="https://cdn2.iconfinder.com/data/icons/everything-but-the-kitchen-sink-filled/100/common-31-512.png" />
            Email
          </a>
        </Col>
      </Row>
      <p> Made with &hearts; by Jonty Ward </p>
     
    </Jumbotron>
  )
}

export default Footer
