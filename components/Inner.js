// Imports - config
import React from 'react'

// Imports - styles
import '../css/inner'


// Component
const Inner = ({ children }) => {
  return (
    <div
      className="inner"
    >
      { children }
    </div>
  )
}


Inner.propTypes = {
  children: React.PropTypes.node,
}


export default Inner
