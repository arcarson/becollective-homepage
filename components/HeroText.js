// Imports - config
import React from 'react'

// Imports - styles
import '../css/hero-text'


// Component
const HeroText = ({ children }) => {
  return (
    <h3
      className="hero-text"
    >
      { children }
    </h3>
  )
}


HeroText.propTypes = {
  children: React.PropTypes.node.isRequired,
}


export default HeroText
