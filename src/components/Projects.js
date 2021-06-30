import React from 'react'
import { Tabs, Tab, Container } from 'react-bootstrap'
import Project4 from './Project4'
import Project3 from './Project3'
import Project2 from './Project2'
import Project1 from './Project1'

const Projects = () => {
  // const [key, setKey] = useState('Project-4')
  return (
    <Container>
      <h1>Projects</h1>
      <Tabs defaultActiveKey="Project-4" id="uncontrolled-tab-example">

        <Tab eventKey="Project-4" title="Cornhub">
          <Project4 />
        </Tab>

        <Tab eventKey="Project-3" title="The Natural Wanderer ">
          <Project3 />
        </Tab>

        <Tab eventKey="Project22" title="Lord of the Rings Quiz">
          <Project2 />
        </Tab>

        <Tab eventKey="Project-1" title="Battleships">
          <Project1 />
        </Tab>

      </Tabs>
    </Container>
  )
}

export default Projects
