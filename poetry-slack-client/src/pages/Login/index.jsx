import React from 'react'
import styles from './Login.module.scss'

const Login = props => {
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
                  <div>
                     <a
                        className={styles.slackbutton}
                        href="https://slack.com/oauth/authorize?scope=incoming-webhook,commands&client_id=807524400866.830008933542"
                     >
                        <img
                           alt="Add to Slack"
                           height="40"
                           width="139"
                           src="https://platform.slack-edge.com/img/add_to_slack.png"
                           srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                        />
                     </a>
                  </div>
                  <div className={styles.slackbutton}>
                     <a href={process.env.REACT_APP_SIGNIN_URI}>
                        <img
                           src="https://api.slack.com/img/sign_in_with_slack.png"
                           alt="slack button"
                        />
                     </a>
                  </div>
               </div>
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
