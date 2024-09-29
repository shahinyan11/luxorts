import { shallow } from 'enzyme';

import AddNewListingHeader from '../component';

describe('AddNewListingHeader component', () => {
  const props = {
    onExit: jest.fn(),
    title: { id: 'title.id' },
  };

  const component = shallow(<AddNewListingHeader {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
