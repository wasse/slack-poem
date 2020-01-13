import React from 'react'
import { Tile } from '../../../components'

const TileDefault = props => (
   <div data-testid="default">
      <Tile {...props} />
   </div>
)

export { TileDefault }
