// Imports - config
import React from 'react'

// Imports - components
import Inner from '../components/Inner'

// Imports - styling
import '../css/hero'


// Component
const Hero = ({ children }) => {
  return (
    <div
      className="hero"
    >
      <Inner
        className="hero__inner"
      >
        { children }
      </Inner>
    </div>
  )
}


Hero.propTypes = {
  children: React.PropTypes.node,
}


export default Hero
