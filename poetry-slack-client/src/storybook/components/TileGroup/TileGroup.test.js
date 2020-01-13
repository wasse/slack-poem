import { TileDefault } from './Tile';
import { render } from 'test-utils';

describe('Tile Default ', () => {

    it('should render without crashing', () => {
        const { getByTestId } = render(TileDefault());
        expect(getByTestId(/default/i)).toBeInTheDocument();
    });

});
