// Imports - config
import React from 'react'

// Imports - styles
import '../css/text-block'


// Component
const TextBlock = ({ children }) => {
  return (
    <div
      className="text-block"
    >
      { children }
    </div>
  )
}


TextBlock.propTypes = {
  children: React.PropTypes.element,
}


export default TextBlock
