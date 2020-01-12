import { storiesOf } from '@storybook/react';
import { AcrosticDefault } from './Acrostic';

storiesOf('features|Acrostic', module)
.addParameters({ jest: ['Acrostic'] })
.add('Default', () => {
    return AcrosticDefault();
});
