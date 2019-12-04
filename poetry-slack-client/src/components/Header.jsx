import React from 'react'
import 'bulma'

import Button from './Button'

const Header = () => {
  return (
    <div className="hero is-dark">
      <div className="contents is-centered">
        <div className="hero-body">
          <h1 className="title is-bold">Poetry-Slack</h1>
            <h2 className="subtitle">Coming soon!</h2>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Button className="button" children="Log Out"></Button>
        </div>
      </div>
    </div>
  )
}
export default Header