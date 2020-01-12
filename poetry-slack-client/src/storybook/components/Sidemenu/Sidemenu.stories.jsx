import { storiesOf } from '@storybook/react';
import { SidemenuDefault } from './Sidemenu';

storiesOf('components|Sidemenu', module)
.addParameters({ jest: ['Sidemenu'] })
.add('Default', () => {
    return SidemenuDefault();
});
