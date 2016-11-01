// Imports - config
import React from 'react'

// Imports - styles
import '../css/section'


// Component
const Section = ({ children }) => {
  return (
    <section
      className="section"
    >
      { children }
    </section>
  )
}


Section.propTypes = {
  children: React.PropTypes.node,
}


export default Section
