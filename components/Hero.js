// Imports - config
import React from 'react'

// Imports - styling
import '../css/hero'


// Component
const Hero = ({ children }) => {
  return (
    <div
      className="hero"
    >
      { children }
    </div>
  )
}


Hero.propTypes = {
  children: React.PropTypes.node,
}


export default Hero
