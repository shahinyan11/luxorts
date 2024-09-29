import { shallow } from 'enzyme';

import ContactUs from '../component';

describe('ContactUs component', () => {
  const component = shallow(<ContactUs />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
