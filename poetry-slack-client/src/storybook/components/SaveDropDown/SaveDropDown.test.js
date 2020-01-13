import { SaveDropDownDefault } from './SaveDropDown';
import { render } from 'test-utils';

describe('SaveDropDown Default ', () => {

    it('should render without crashing', () => {
        const { getByTestId } = render(SaveDropDownDefault());
        expect(getByTestId(/default/i)).toBeInTheDocument();
    });

});
