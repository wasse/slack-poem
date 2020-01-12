import { AboutDefault } from './About';
import { render } from 'test-utils';

describe('About Default ', () => {

    it('should render without crashing', () => {
        const { getByTestId } = render(AboutDefault());
        expect(getByTestId(/default/i)).toBeInTheDocument();
    });

});
