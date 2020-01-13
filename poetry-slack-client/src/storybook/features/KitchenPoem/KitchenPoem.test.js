import { KitchenPoemDefault } from './KitchenPoem';
import { render } from 'test-utils';

describe('KitchenPoem Default ', () => {

    it('should render without crashing', () => {
        const { getByTestId } = render(KitchenPoemDefault());
        expect(getByTestId(/default/i)).toBeInTheDocument();
    });

});
