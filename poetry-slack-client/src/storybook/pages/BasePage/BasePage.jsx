import React from 'react'
import BasePage from '../../../pages/BasePage'

const BasePageDefault = props => (
   <div data-testid="default">
      <BasePage {...props} />
   </div>
)

export { BasePageDefault }
