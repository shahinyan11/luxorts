import { shallow } from 'enzyme';

import FlashMessage from '../component';

describe('FlashMessage component', () => {
  it('matches snapshot', () => {
    expect(shallow(<FlashMessage />)).toMatchSnapshot();
  });
});
