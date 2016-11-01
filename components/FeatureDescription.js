// Imports - config
import React from 'react'
import classNames from 'classnames'

// Imports - styles
import '../css/feature-description'


// Component
const FeatureDescription = ({
  image,
  reversed,
  text,
  title,
}) => {
  return (
    <div
      className={ classNames('feature-description', { 'feature-description--reversed': reversed }) }
    >
      <div
        className="feature-description__main"
      >
        <h4
          className="feature-description__title"
        >
          { title }
        </h4>
        <p
          className="feature-description__text"
        >
          { text }
        </p>
      </div>
      <div
        className="feature-description__aside"
      >
        <img
          alt={ image }
          className="feature-description__image"
          src={ `/images/${ image }` }
        />
      </div>
    </div>
  )
}


FeatureDescription.propTypes = {
  image: React.PropTypes.string,
  reversed: React.PropTypes.bool,
  text: React.PropTypes.string,
  title: React.PropTypes.string,
}


export default FeatureDescription
