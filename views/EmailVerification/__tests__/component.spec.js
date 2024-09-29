import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';
import EmailVerification from '../component';

const mockedHookData = {
  formik,
  isLoading: false,
  isResendLoading: false,
  onResendClickHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('EmailVerification component', () => {
  const props = {
    currentUser: {
      email: 'email',
    },
  };

  const component = shallow(<EmailVerification {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
