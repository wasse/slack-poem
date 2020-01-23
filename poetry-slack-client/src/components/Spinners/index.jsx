import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import Loader from 'react-loader-spinner'

// A loader that keeps track of the async methods wrapped with trackPromise() and displays when they are in progress.
// It does not show up if the promise is returned before 500 milliseconds.
const Spinner = props => {
   const { promiseInProgress } = usePromiseTracker({ delay: 500 })

   return (
      promiseInProgress && (
         <div className="spinner">
            <Loader type="ThreeDots" color="#b63e29" height="100" width="100" />
         </div>
      )
   )
}
export default Spinner
