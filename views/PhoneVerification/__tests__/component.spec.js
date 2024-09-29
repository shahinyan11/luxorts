import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';
import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import PhoneVerification from '../component';

const mockedHookData = {
  formik,
  isLoading: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('PhoneVerification component', () => {
  const props = {
    currentUser: mockedCurrentUser,
  };

  const component = shallow(<PhoneVerification {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
