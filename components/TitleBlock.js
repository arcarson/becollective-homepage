// Imports - config
import React from 'react'

// Imports - componets
import Divider from '../components/Divider'

// Imports - styles
import '../css/title-block'


// Component
const TitleBlock = ({ sub, main }) => {
  return (
    <div
      className="title-block"
    >
      <h4
        className="title-block__sub"
      >
        { sub }
      </h4>
      <h2
        className="title-block__main"
      >
        { main }
      </h2>
      <Divider />
    </div>
  )
}


TitleBlock.propTypes = {
  main: React.PropTypes.string,
  sub: React.PropTypes.string,
}


export default TitleBlock
