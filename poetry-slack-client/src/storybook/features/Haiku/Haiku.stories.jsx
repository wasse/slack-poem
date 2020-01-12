import { storiesOf } from '@storybook/react';
import { HaikuDefault } from './Haiku';

storiesOf('features|Haiku', module)
.addParameters({ jest: ['Haiku'] })
.add('Default', () => {
    return HaikuDefault();
});
