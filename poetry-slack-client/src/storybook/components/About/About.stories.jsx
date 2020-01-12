import { storiesOf } from '@storybook/react';
import { AboutDefault } from './About';

storiesOf('components|About', module)
.addParameters({ jest: ['About'] })
.add('Default', () => {
    return AboutDefault();
});
