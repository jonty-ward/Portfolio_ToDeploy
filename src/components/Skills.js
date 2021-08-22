import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiPostgresql, SiNodeDotJs, SiPython, SiDjango, SiMongodb, SiGit, SiDart } from 'react-icons/si'

const Skills = () => {
  return (
    <Container>
      <h1 className="skills-header">Technologies I have used </h1>

      <Container>
        <Row className="skills-row">
          <Col className="skills-icon-description-container">
            <SiReact className="skills-icon"/>
            <p>React.js</p>
          </Col>

          <Col className="skills-icon-description-container">
            < SiJavascript className="skills-icon" />
            <p>JavaScript</p>
          </Col>

          <Col className="skills-icon-description-container">
            <SiHtml5 className="skills-icon" />
            <p>HTML</p>
          </Col>
       
          <Col className="skills-icon-description-container">
            <SiCss3 className="skills-icon"/>
            <p>CSS3</p>
          </Col>
    
    
          <Col className="skills-icon-description-container">
            < SiPostgresql className="skills-icon"/>
            <p>PostgeSQL</p>
          </Col>



          <Col className="skills-icon-description-container">
            <SiNodeDotJs className="skills-icon"/>
            <p>Node.js</p>
          </Col>

          <Col className="skills-icon-description-container">
            <SiPython className="skills-icon"/>
            <p>Python</p>
          </Col>


          <Col className="skills-icon-description-container">
            <SiDjango className="skills-icon"/>
            <p>Django</p>
          </Col>


          <Col className="skills-icon-description-container">
            <SiMongodb className="skills-icon"/>
            <p>MongoDB</p>
          </Col>


  
         
         

        

          <Col className="skills-icon-description-container">
            <SiGit className="skills-icon"/>
            <p>Git</p>
          </Col>


          <Col className="skills-icon-description-container">
            <SiDart className="skills-icon"/>
            <p>Dart</p>
          </Col>


          
      

       


        </Row>
      </Container>

    </Container>
  )
}

export default Skills
