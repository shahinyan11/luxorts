import { shallow } from 'enzyme';

import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import useContainer from '../hook';
import Header from '../component';

const mockedHookData = {
  isLoggedInUserWidgetVisible: false,
  isLoggedOutUserWidgetVisible: false,
  currentUser: mockedCurrentUser,
  onLogOutHandler: jest.fn(),
  switchToHostingRoute: 'switchToHostingRoute',
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Header component', () => {
  let component = null;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isSignIn equals true', () => {
    component.setProps({
      isSignIn: true,
    });
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isSignUp equals true', () => {
    component.setProps({
      isSignUp: true,
    });
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isLoggedInUserWidgetVisible equals true', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isLoggedInUserWidgetVisible: true,
    });
    component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isLoggedOutUserWidgetVisible equals true', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isLoggedOutUserWidgetVisible: true,
    });
    component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});
