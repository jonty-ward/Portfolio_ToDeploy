import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
// import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {
  return (
   

    
    <div >
      <Navbar  bg="light" variant="light" className="navbar ">
        {/* <Navbar.Brand href="#home">Jonty Ward</Navbar.Brand> */}
        <Nav className="mr-auto">
          <AnchorLink href="#aboutme">About Me</AnchorLink>
          <AnchorLink href="#skills">Skills</AnchorLink>
          <AnchorLink href="#experience">Experience </AnchorLink>
          <AnchorLink href="#projects">Projects</AnchorLink>
          <AnchorLink href="#interests">Interests</AnchorLink>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </Nav>
    
      </Navbar>    
    </div>
    

   

  )
}

export default NavBar
