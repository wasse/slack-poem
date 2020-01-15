import { CallbackDefault } from './Callback';
import { render } from 'test-utils';

describe('Callback Default ', () => {

    it('should render without crashing', () => {
        const { getByTestId } = render(CallbackDefault());
        expect(getByTestId(/default/i)).toBeInTheDocument();
    });

});
