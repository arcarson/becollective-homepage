// Imports - config
import React from 'react'

// Imports - styles
import '../css/button'


const ButtonElement = ({ title, ...props }) => {
  return (
    <button
      { ...props }
      className="button"
    >
      { title }
    </button>
  )
}


ButtonElement.propTypes = {
  title: React.PropTypes.string.isRequired,
}


// Component
const Button = (props) => {
  return (
    <ButtonElement { ...props } />
  )
}


export default Button
