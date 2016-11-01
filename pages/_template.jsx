// Imports - config
import React from 'react'
import { prefixLink } from 'gatsby-helpers'

// Imports - components
import { Link } from 'react-router'
import Header from '../components/Header'

// Imports - styles
import 'normalize.css'
import '../css/type'
import '../css/base'


// Component
const Template = ({ children }) => {
  return (
    <div>
      <Header />
      { children }
    </div>
  )
}


Template.propTypes = {
  children: React.PropTypes.element,
}


export default Template
