import { shallow } from 'enzyme';

import AmountsForm from '../component';

describe('AmountsForm component', () => {
  const props = {
    onListingBedroomsChange: jest.fn(),
    onListingBathroomsChange: jest.fn(),
  };

  const component = shallow(<AmountsForm {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
