// Imports - config
import React from 'react'

// Imports - components
import MainNav from './MainNav'
import Button from './Button'

// Imports - styles
import '../css/header'
import '../css/logo'


// Component
const Header = () => {
  return (
    <div
      className="header"
    >
      <h1
        className="header__logo logo"
      >
        Be Collective
      </h1>

      <div
        className="header__aside"
      >
        <MainNav
          items={[
            { title: 'Why us?', address: '/why-us' },
            { title: 'Features', address: '/features' },
            { title: 'Who\'s it for', address: '/whos-it-for' },
            { title: 'Journal', address: '/journal' },
          ]}
        />

        <Button
          title="Log in"
          color="grey"
          className="header__action-spacing"
        />

        <Button
          title="Join"
        />

      </div>
    </div>
  )
}


Header.propTypes = {
}


export default Header
