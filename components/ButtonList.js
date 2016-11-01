// Imports - config
import React from 'react'

// Imports - styles
import '../css/button-list'


// Component
const ButtonList = ({ buttons }) => {
  return (
    <ul
      className="button-list"
    >
      { buttons.map((button, i) => {
        return (
          <li
            className="button-list__item"
            key={ i }
          >
            { button }
          </li>
        )
      }) }
    </ul>
  )
}


ButtonList.propTypes = {
  buttons: React.PropTypes.array.isRequired,
}


export default ButtonList
