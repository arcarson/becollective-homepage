// Imports - config
import React from 'react'

// Imports - components
import StatBlock from '../components/StatBlock'

// Imports - styles
import '../css/stat-list'


// Component
const StatList = ({ stats }) => {
  return (
    <ul
      className="stat-list"
    >
      { stats.map(({ label, value }, i) => {
        return (
          <li
            key={ i }
            className="stat-list__item"
          >
            <StatBlock
              label={ label }
              value={ value }
            />
          </li>
        )
      })}
    </ul>
  )
}


StatList.propTypes = {
  stats: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
    }),
  ).isRequired,
}


export default StatList
