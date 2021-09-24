import React from 'react'
import { Container } from 'react-bootstrap'
import HeroCarousel from './HeroCarousel'


const Interessts = () => {
  return (
    <Container>
      <h1>Interests</h1>
      <div className="interests-container">

        {/* <h1>      This should contain some information about what i like to do for fun! </h1> */}
        <p className="interests-paragraph">In my free time I love getting outdoors! Being out in the fresh air is hugely beneficial for my mental an physical wellbeing. I love hiking and running, and I have also recently started scuba diving again after a two year hiatus! I am willing to try my hand at anything, and have been roped it to rock climbing (pardon the pun!), open water swimming, and paddle boarding. 

          <br/>
          <br/>
          
        I have a love for all animals, and they play a big part in my life, whether it is rescuing a hedgehog on the side of the road, going on a holiday abroad and seeing exotic animals in the wild, or taking my (adorably daft-see photo of him stuck in a style!) labrador out for his walks!

          <br/>
          <br/>
         I love to travel, and during the pandemic have taken the opportunity to travel more locally. However top of my list when we can travel more freely is Colombia, for its wildlife, culture, and history! 
          <br/>
          <br/>
   
   
         
        </p>
        <HeroCarousel/>
      </div>
    </Container>
  )
}

export default Interessts
