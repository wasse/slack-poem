import { ButtonDefault } from './Button';
import { render } from 'test-utils';

describe('Button Default ', () => {

    it('should render without crashing', () => {
        const { getByTestId } = render(ButtonDefault());
        expect(getByTestId(/default/i)).toBeInTheDocument();
    });

});
