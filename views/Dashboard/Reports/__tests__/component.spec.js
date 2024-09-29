import { shallow } from 'enzyme';

import Reports from '../component';

describe('Reports component', () => {
  const component = shallow(<Reports />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
