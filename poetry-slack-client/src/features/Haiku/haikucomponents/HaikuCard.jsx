import React from 'react'

const HaikuCard = ({ children, ...other }) => {
   return (
      <div>
         <div className="card">{children}</div>
      </div>
   )
}

export default HaikuCard
