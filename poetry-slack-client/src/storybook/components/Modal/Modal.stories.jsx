import { storiesOf } from '@storybook/react'
import { ModalDefault } from './Modal'

storiesOf('Components | Modal', module)
   .addParameters({ jest: ['Modal'] })
   .add('Default', () => {
      return ModalDefault({ showCard: true })
   })
