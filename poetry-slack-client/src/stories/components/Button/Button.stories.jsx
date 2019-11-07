import { storiesOf } from '@storybook/react';
import { ButtonDefault } from './Button';
import { boolean, text } from '@storybook/addon-knobs';

storiesOf('Components | Button', module)
.addParameters({ jest: ['Button'] })
.add('Default', () => {

    const defaultProps = {
        className: 'button is-primary is-large',
        children: text('children', 'Adjust this text with knobs'),
        defaultText: 'Default text',
        disabled: boolean('Disable', false)
    }
    return ButtonDefault(defaultProps);
})
.add('With rounded corners', () => {

    const roundedCorners = {
        className: 'button is-rounded is-link is-medium',
        children: text('children', 'Adjust this text with knobs'),
        defaultText: 'Default text',
        disabled: boolean('Disable', false)
    }
    return ButtonDefault(roundedCorners);
});
