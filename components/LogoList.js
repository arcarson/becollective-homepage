// Imports - config
import React from 'react'

// Imports - styles
import '../css/logo-list'


// Component
const LogoList = ({ logos }) => {
  return (
    <ul
      className="logo-list"
    >
      { logos.map((logo, i) => {
        return (
          <li
            className="logo-list__item"
            key={ i }
          >
            <img
              className="logo-list__image"
              src={ `/images/logos/${ logo }.jpg` }
              alt={ `logo for ${ logo }` }
            />
          </li>
        )
      }) }
    </ul>
  )
}


LogoList.propTypes = {
  logos: React.PropTypes.arrayOf(
    React.PropTypes.string
  ),
}


export default LogoList
