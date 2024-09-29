import { shallow } from 'enzyme';

import PublishListingModal from '../component';

describe('PublishListingModal component', () => {
  const props = {
    title: { id: 'title.id' },
    description: { id: 'description.id' },
    onClose: jest.fn(),
  };
  const component = shallow(<PublishListingModal {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
