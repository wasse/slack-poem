import { LoginDefault } from './Login';
import { render } from 'test-utils';

describe('Login Default ', () => {

    it('should render without crashing', () => {
        const { getByTestId } = render(LoginDefault());
        expect(getByTestId(/default/i)).toBeInTheDocument();
    });

});
