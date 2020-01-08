import React from 'react'
import { Button } from '../../components'
import { Link } from 'react-router-dom'
import styles from './Login.module.scss'

import { login } from '../../authentication-authorization/Auth'

function Login(props) {
   return (
      <div>
         <div className="hero is-primary is-size-1">
            <div className="hero-body">
               <div className="container has-text-centered">
                  <h1 className="title has-text-weight-bold">
                     Welcome to poetry-slack!
                  </h1>
                  <div className="subtitle">
                     -- The workspace poetry generator --
                  </div>
                  <div className={styles.slackbutton}>
                     <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=your_client_id">
                        <img
                           src="https://api.slack.com/img/sign_in_with_slack.png"
                           alt="slack button"
                        />
                     </a>
                  </div>
               </div>
               {/* Remove Button below when auth is working */}
               <p className="has-text-centered">
                  <Link to={`/home`}>
                     <Button
                        className="button is-primary is-uppercase"
                        onClick={login()}
                        children={
                           'Temporary sign in button. Redirects to /home'
                        }
                     />
                  </Link>
               </p>
            </div>
         </div>

         <div className="card is-two-third">
            <div className="newToSlack card-content has-text-centered">
               <span className="title is-medium">
                  No slack account?{' '}
                  <span role="img" aria-label="gasp">
                     😱
                  </span>
               </span>

               <div className={styles.linkbutton}>
                  <a href="https://slack.com/intl/en-se/">
                     <button className="button subtitle is-primary">
                        Create one here
                     </button>
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login
