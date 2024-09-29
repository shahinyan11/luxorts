import { shallow } from 'enzyme';

import EditListingFooter from '../component';

describe('EditListingFooter component', () => {
  const props = {
    isLoading: true,
    disabled: false,
    onSave: jest.fn(),
  };
  const component = shallow(<EditListingFooter {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
