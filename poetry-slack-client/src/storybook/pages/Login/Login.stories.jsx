import { storiesOf } from '@storybook/react';
import { LoginDefault } from './Login';

storiesOf('pages|Login', module)
.addParameters({ jest: ['Login'] })
.add('Default', () => {
    return LoginDefault();
});
