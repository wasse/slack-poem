import React from 'react'
import Haiku from '../../../features/Haiku'

const HaikuDefault = props => (
   <div data-testid="default">
      <Haiku {...props} />
   </div>
)

export { HaikuDefault }
