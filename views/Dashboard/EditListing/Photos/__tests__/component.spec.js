import { shallow } from 'enzyme';

import Photos from '../component';

describe('Photos component', () => {
  const component = shallow(<Photos />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
