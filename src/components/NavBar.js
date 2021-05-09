import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const NavBar = () => {
  return (
    <div>
      <Navbar  bg="light" variant="light" className="navbar ">
        <Navbar.Brand href="#home">Jonty Ward</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Skills</Nav.Link>
          <Nav.Link href="#features">Projects</Nav.Link>
          <Nav.Link href="#features">Experience </Nav.Link>
          <Nav.Link href="#pricing">Interests</Nav.Link>
        </Nav>
    
      </Navbar>    </div>
  )
}

export default NavBar
