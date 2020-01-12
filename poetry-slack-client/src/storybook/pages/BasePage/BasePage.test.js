import { BasePageDefault } from './BasePage';
import { render } from 'test-utils';

describe('BasePage Default ', () => {

    it('should render without crashing', () => {
        const { getByTestId } = render(BasePageDefault());
        expect(getByTestId(/default/i)).toBeInTheDocument();
    });

});
