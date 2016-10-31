// Imports - config
import React from 'react'
import { prefixLink } from 'gatsby-helpers'

// Imports - components
import { Link } from 'react-router'

// Imports - styles
import '../css/main-nav'


// Component
const MainNav = ({ items }) => {
  return (
    <ul
      className="main-nav"
    >
      { items.map(({ title, address }, i) => {
        return (
          <li
            key={ i }
            className="main-nav__item"
          >
            <Link
              to={ prefixLink(address) }
              className="main-nav__link"
            >
              { title }
            </Link>
          </li>
        )
      }) }
    </ul>
  )
}


MainNav.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      address: React.PropTypes.string,
    }),
  ),
}


export default MainNav
