import { shallow } from 'enzyme';

import mockedListing from 'views/__mocks__/mockedListing';

import ListingColumn from '../component';

describe('ListingColumn component', () => {
  const props = { listing: mockedListing };

  const component = shallow(<ListingColumn {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
