import { shallow } from 'enzyme';

import mockedPropertyTypes from 'views/__mocks__/mockedPropertyTypes';

import PropertyCard from '../component';

describe('PropertyCard component', () => {
  const props = {
    ...mockedPropertyTypes[0],
    image: 'image',
  };

  const component = shallow(<PropertyCard {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
