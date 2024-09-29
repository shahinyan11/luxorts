import { shallow } from 'enzyme';

import mockedTrendingLocations from 'views/__mocks__/mockedTrendingLocations';

import TrendingCard from '../component';

describe('TrendingCard component', () => {
  const props = {
    ...mockedTrendingLocations[0],
    image: 'image',
  };

  const component = shallow(<TrendingCard {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
