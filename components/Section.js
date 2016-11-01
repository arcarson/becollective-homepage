// Imports - config
import React from 'react'
import classNames from 'classnames'

// Imports - styles
import '../css/section'


// Component
const Section = ({
  children,
  color,
}) => {
  const cx = classNames('section', { [`section--${ color }`]: color })
  return (
    <section
      className={ cx }
    >
      { children }
    </section>
  )
}


Section.propTypes = {
  children: React.PropTypes.node,
  color: React.PropTypes.string,
}


export default Section
