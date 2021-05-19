import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Experience from './components/Experience'
// import Currently from './components/Currently'
import Projects from './components/Projects'
import Interests from './components/Interessts'
// import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="profile-next-to-skills">
        <h2 id="aboutme"> </h2>
        <Bio/>
        <h2 id="skills"> </h2>
      
        <Skills/>
      </div>

      {/* <Currently/> */}
      <h2 id="experience"> </h2>
      <Experience/>
      <h2 id="projects"> </h2>
      <Projects/>
      <h2 id="interests"> </h2>
      <Interests/>
      {/* <ContactMe/> */}
      <p id="contact"></p>
      <Footer/>

    </div>
  )
}

export default App
