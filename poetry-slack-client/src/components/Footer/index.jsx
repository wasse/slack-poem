import React from 'react'
import 'bulma'
import { observer } from 'mobx-react'

const Footer = observer(() => {
    return (
        <footer className="footer">
          <div className="content has-text-right">
            <p>
              <strong>Poetry-Slack</strong> by Okuyama, Sandström-Wagner & Wassenius.
            </p>
          </div>
        </footer>
    )
})
export default Footer