import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import Loader from 'react-loader-spinner'

const LoadingIndicator = props => {
   const { promiseInProgress } = usePromiseTracker()

   return promiseInProgress && (<h1>Hey some async call in progress ! </h1>
   <div
      style={{
         width: '100%',
         height: '100',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'
      }}
   >
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
   </div>)
}
