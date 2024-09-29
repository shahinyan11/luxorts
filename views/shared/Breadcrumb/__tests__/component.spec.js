import { shallow } from 'enzyme';

import Breadcrumb from '../component';

const mockedRouter = {
  route: '/account-settings',
};

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => mockedRouter),
}));

describe('Breadcrumb component', () => {
  const component = shallow(<Breadcrumb />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
