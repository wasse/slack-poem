import { HaikuDefault } from './Haiku'
import { render } from '../../../utils/test-utils'

describe('Haiku Default ', () => {
   it('should render without crashing', () => {
      const { getByTestId } = render(HaikuDefault())
      expect(getByTestId(/default/i)).toBeInTheDocument()
   })
})
