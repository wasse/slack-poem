import { AcrosticDefault } from './Acrostic';
import { render } from 'test-utils';

describe('Acrostic Default ', () => {

    it('should render without crashing', () => {
        const { getByTestId } = render(AcrosticDefault());
        expect(getByTestId(/default/i)).toBeInTheDocument();
    });

});
