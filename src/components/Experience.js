import React from 'react'
import { Accordion, Card, Container } from 'react-bootstrap'

const Experience = () => {
  return (
    <Container>
      <h1>Experience</h1>
      <div className="experience-cards">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle className="experience-header" as={Card.Header} eventKey="1">
            FPRC Environment & Design
              <img className="link-icon-projects" src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620577785/portfolio/kisspng-computer-icons-symbol-plus-and-minus-signs-5ae5a8ce966e56.3419481815250003986162_hw1mri.png" alt="plus sign"/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>Seasonal Ecologist </p>
                <p>April 2021 - Present</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle className="experience-header" as={Card.Header} eventKey="1">
            General Assembly 
              <img className="link-icon-projects" src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620577785/portfolio/kisspng-computer-icons-symbol-plus-and-minus-signs-5ae5a8ce966e56.3419481815250003986162_hw1mri.png" alt="plus sign"/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>Software Engineering Immersive Course </p>
                <p>Jan 2021 - April 2021</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      <div className="experience-cards">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle className="experience-header" as={Card.Header} eventKey="1">
            Engoo
              <img className="link-icon-projects" src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620577785/portfolio/kisspng-computer-icons-symbol-plus-and-minus-signs-5ae5a8ce966e56.3419481815250003986162_hw1mri.png" alt="plus sign"/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p> English as a Second Language Tutor </p>
                <p>Oct 2020- Present</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle className="experience-header"as={Card.Header} eventKey="1">
            Hillcrest School & Sixth Form
              <img className="link-icon-projects" src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620577785/portfolio/kisspng-computer-icons-symbol-plus-and-minus-signs-5ae5a8ce966e56.3419481815250003986162_hw1mri.png" alt="plus sign"/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>Secondary School Science Teacher (Trainee) </p>
                <p>Jan 2020 - March 2020</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      <div className="experience-cards">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle className="experience-header" as={Card.Header} eventKey="1">
            King Edward VI Camp Hill School for Boys
              <img className="link-icon-projects" src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620577785/portfolio/kisspng-computer-icons-symbol-plus-and-minus-signs-5ae5a8ce966e56.3419481815250003986162_hw1mri.png" alt="plus sign"/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>Secondary School Science Teacher  </p>
                <p>Sept 2019- Jan 2020 & March 2020 - July 2020</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle className="experience-header" as={Card.Header} eventKey="1">
            AECOM
              <img className="link-icon-projects" src="https://res.cloudinary.com/diwtcw0yb/image/upload/v1620577785/portfolio/kisspng-computer-icons-symbol-plus-and-minus-signs-5ae5a8ce966e56.3419481815250003986162_hw1mri.png" alt="plus sign"/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>Seasonal ecologist  </p>
                <p>May 2018 - November 2018</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </Container>
  )
}

export default Experience
