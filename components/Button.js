// Imports - config
import React from 'react'
import classNames from 'classnames'

// Imports - styles
import '../css/button'


const ButtonElement = ({ title, ...props }) => {
  return (
    <button
      { ...props }
    >
      { title }
    </button>
  )
}


ButtonElement.propTypes = {
  title: React.PropTypes.string.isRequired,
}


// Component
const Button = ({ color, className, ...props }) => {
  const cx = classNames('button',
                        { [`button--${ color }`]: color },
                        { [className]: className })

  return (
    <ButtonElement
      className={ cx }
      { ...props }
    />
  )
}


export default Button
