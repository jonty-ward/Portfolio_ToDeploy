import React from 'react'
import { Container } from 'react-bootstrap'
import HeroCarousel from './HeroCarousel'


const Interessts = () => {
  return (
    <Container>
      <h1>Interests</h1>
      <div className="interests-container">

        {/* <h1>      This should contain some information about what i like to do for fun! </h1> */}
        <ol>
          <li>Make it interactive</li>
          <li>Make it snappy</li>
          <li> give it some personality!</li>
        </ol>
        <HeroCarousel/>
      </div>
    </Container>
  )
}

export default Interessts
