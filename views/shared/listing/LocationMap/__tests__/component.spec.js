import { shallow } from 'enzyme';

import ListingLocationMap from '../component';

describe('ListingLocationMap component', () => {
  const props = {
    mapContainerRef: { current: {} },
    address: 'address',
  };
  const component = shallow(<ListingLocationMap {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
