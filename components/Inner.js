// Imports - config
import React from 'react'
import classNames from 'classnames'

// Imports - styles
import '../css/inner'


// Component
const Inner = ({
  children,
  className,
}) => {
  return (
    <div
      className={ classNames('inner', { [className]: className }) }
    >
      { children }
    </div>
  )
}


Inner.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
}


export default Inner
