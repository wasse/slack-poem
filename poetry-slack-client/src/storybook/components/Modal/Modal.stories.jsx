import { storiesOf } from '@storybook/react'
import { ModalDefault } from './Modal'
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('Components | Modal', module)
   .addParameters({ jest: ['Modal'] })
   .add('Default', () => {
      return ModalDefault({ showCard: true })
   })
