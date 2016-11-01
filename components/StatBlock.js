// Imports - config
import React from 'react'

// Imports - componets
import HeroText from '../components/HeroText'
import Divider from '../components/Divider'

// Imports - styles
import '../css/stat-block'


// Component
const StatBlock = ({
  label,
  value,
}) => {
  return (
    <div
      className="stat-block"
    >
      <HeroText>
        { value }
      </HeroText>

      <Divider />

      <HeroText>
        { label }
      </HeroText>
    </div>
  )
}


StatBlock.propTypes = {
}


export default StatBlock
