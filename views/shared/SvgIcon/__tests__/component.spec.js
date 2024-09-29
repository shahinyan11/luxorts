import { shallow } from 'enzyme';
import SvgIcon from '../component';

describe('SvgIcon component', () => {
  it('matches snapshot', () => {
    const props = {
      className: 'className',
      icon: 'cross',
    };
    expect(shallow(<SvgIcon {...props} />)).toMatchSnapshot();
  });
});
