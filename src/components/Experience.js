import React from 'react'
import { Accordion, Card, Container } from 'react-bootstrap'
import { FiPlusCircle } from 'react-icons/fi'

const Experience = () => {
  return (
    <Container>
      <h1>Experience</h1>
      {/* <div className="experience-cards"> */}
      <Accordion defaultActiveKey="0"  className="experience-acordion-items">
        <Card>
          <Accordion.Toggle className="experience-header" as={Card.Header} eventKey="1">
            FPRC Environment & Design
            <p className="link-icon-projects"><FiPlusCircle/></p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>Junior Software Developer</p>
              <p>July 2021 - Present</p>
              <p>I work as a junior software engineer helping to build a project management and scheduling software using Dart, Flutter and Firebase.</p>
              <hr/>
              <p>Seasonal Ecologist </p>
              <p>April 2021 - July 2021</p>
              <p>I worked as a seasonal ecology field surveyor, working as part of a team to deliver ecological impact assessments. This involved working both as part of a team, and also working independently. </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>


      <Accordion defaultActiveKey="0" className="experience-acordion-items">
        <Card>
          <Accordion.Toggle className="experience-header" as={Card.Header} eventKey="1">
            General Assembly 
            <p className="link-icon-projects"><FiPlusCircle/></p>

          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>Software Engineering Immersive Course </p>
              <p>Jan 2021 - April 2021</p>
              <p>A 12-week immersive course that helped me learn the core skills to pursue a career in Software Development (particularly JavaScript, React, HTML and CSS). We learned to build full-stack web apps. The course consisted of a daily stand-up, online lessons, pair-coding, and individual and group projects.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      {/* </div> */}

      {/* <div className="experience-cards"> */}
      <Accordion defaultActiveKey="0" className="experience-acordion-items">
        <Card>
          <Accordion.Toggle className="experience-header" as={Card.Header} eventKey="1">
            Engoo
            <p className="link-icon-projects"><FiPlusCircle/></p>

          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p> English as a Second Language Tutor </p>
              <p>Oct 2020 - Present</p>
              <p>I work as an online English tutor for students in Japan. My role involves delivering lessons, and helping students improve their speaking, listening and reading skills in English. </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey="0" className="experience-acordion-items">
        <Card>
          <Accordion.Toggle className="experience-header" as={Card.Header} eventKey="1">
            King Edward VI Camp Hill School for Boys
            <p className="link-icon-projects"><FiPlusCircle/></p>

          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>Secondary School Science Teacher  </p>
              <p>Sept 2019 - Jan 2020 & March 2020 - July 2020</p>
              <p>I spent my main placement of my teacher training at King Edward VI Camp Hill School for Boys. This allowed me to develop my confidence and ability to deliver presentations, and hone my organisational skills. It was a challenging experience, but allowed me to overcome my fear of public speaking!</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey="0" className="experience-acordion-items">
        <Card>
          <Accordion.Toggle className="experience-header"as={Card.Header} eventKey="1">
            Hillcrest School & Sixth Form
            <p className="link-icon-projects"><FiPlusCircle/></p>

          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>Secondary School Science Teacher (Trainee) </p>
              <p>Jan 2020 - March 2020</p>
              <p>As part of my teacher training, I spent my second placement teaching at Hillcrest School and Sixth Form - an inner city school in Birmingham. I won the half-termly staff prize for my contributions to teaching at the school- the first time a trainee teacher had been recognised.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      {/* </div> */}

      {/* <div className="experience-cards"> */}
   


      {/* <Accordion defaultActiveKey="0" className="experience-acordion-items">
        <Card>
          <Accordion.Toggle className="experience-header" as={Card.Header} eventKey="1">
            AECOM
            <p className="link-icon-projects"><FiPlusCircle/></p>

          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>Seasonal Ecologist  </p>
              <p>May 2018 - November 2018</p>
              <p>I worked as a seasonal ecology field surveyor, working as part of a team to deliver ecological impact assessments. This involved working both as part of a team, and also working independently. During my time at AECOM I was made an office lead, which meant when in the office I led a small team, working to tight timelines to ensure surveys went out on time, and data was recorded accurately.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion> */}
      {/* </div> */}
    </Container>
  )
}

export default Experience
