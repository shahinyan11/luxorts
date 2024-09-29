import { shallow } from 'enzyme';

import AboutUs from '../component';

jest.mock('state/concepts/publicInfo/selectors', () => ({
  aboutUsPropertiesCountSelector: jest.fn(() => 1),
  aboutUsHostsCountSelector: jest.fn(() => 1),
  aboutUsCitiesCountSelector: jest.fn(() => 1),
}));

describe('AboutUs component', () => {
  const component = shallow(<AboutUs />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
