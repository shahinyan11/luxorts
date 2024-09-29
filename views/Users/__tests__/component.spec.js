import { shallow } from 'enzyme';
import Users from '../component';

describe('Users component', () => {
  it('matches snapshot', () => {
    expect(shallow(<Users />)).toMatchSnapshot();
  });
});
