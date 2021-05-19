import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const NavBar = () => {
  return (
    <div >
      <Navbar  bg="light" variant="light" className="navbar ">
        {/* <Navbar.Brand href="#home">Jonty Ward</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#experience">Experience </Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#interests">Interests</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
    
      </Navbar>    </div>
  )
}

export default NavBar
