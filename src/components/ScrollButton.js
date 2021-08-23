import React, { useState } from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'
import { Button } from './Styles'
	
const ScrollButton = () =>{
	
  const [visible, setVisible] = useState(true)
	
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 175){
      setVisible(false)
    } else if (scrolled <= 175){
      setVisible(true)
    }
  }
	
  const scrollToBottom = () =>{

    document.getElementById('aboutme').scrollIntoView()
  }
	
  window.addEventListener('scroll', toggleVisible)
	
  return (
    <Button>
      <FaArrowCircleDown onClick={scrollToBottom}
        style={{ display: visible ? 'inline' : 'none' }} />
    </Button>
  )
}
	
export default ScrollButton

