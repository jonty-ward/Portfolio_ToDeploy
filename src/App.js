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
      <Bio/>
      {/* <Currently/> */}
      <Skills/>
      <Experience/>
      <Projects/>
      <Interests/>
      {/* <ContactMe/> */}
      <Footer/>

    </div>
  )
}

export default App
