import { SidemenuDefault } from './Sidemenu';
import { render } from 'test-utils';

describe('Sidemenu Default ', () => {

    it('should render without crashing', () => {
        const { getByTestId } = render(SidemenuDefault());
        expect(getByTestId(/default/i)).toBeInTheDocument();
    });

});
