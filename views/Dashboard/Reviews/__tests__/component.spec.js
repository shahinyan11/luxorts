import { shallow } from 'enzyme';

import Reviews from '../component';

describe('Reviews component', () => {
  const component = shallow(<Reviews />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
