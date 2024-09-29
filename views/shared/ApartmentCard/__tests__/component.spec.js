import { shallow } from 'enzyme';

import mockedPopularApartments from 'views/__mocks__/mockedPopularApartments';

import ApartmentCard from '../component';

describe('ApartmentCard component', () => {
  const props = mockedPopularApartments[0];

  const component = shallow(<ApartmentCard {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
