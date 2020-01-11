import React from 'react'
import { Button } from '../../../components'
// import { Button } from 'components'; //Detta funkar inte, av någon anledning. Det fungerar i mitt andra projekt. Felsökning pågår!

const ButtonDefault = props => (
   <div data-testid="default">
      <Button {...props} />
   </div>
)

export { ButtonDefault }
