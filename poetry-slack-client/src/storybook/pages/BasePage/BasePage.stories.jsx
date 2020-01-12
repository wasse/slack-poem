import { storiesOf } from '@storybook/react';
import { BasePageDefault } from './BasePage';

storiesOf('pages|BasePage', module)
.addParameters({ jest: ['BasePage'] })
.add('Default', () => {
    return BasePageDefault();
});
