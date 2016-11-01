// Imports - config
import React from 'react'
import classNames from 'classnames'

// Imports - styles
import '../css/feature-button'


// Component
const FeatureButton = ({ icon, text }) => {
  return (
    <button
      className="feature-button"
    >
      <div
        className={ classNames('feature-button__icon', `feature-button__icon--${ icon }`) }
      />
      <span
        className="feature-button__text"
      >
        { text }
      </span>
    </button>
  )
}


FeatureButton.propTypes = {
  icon: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
}


export default FeatureButton
