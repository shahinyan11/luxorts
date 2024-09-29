import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import RecoverPassword from '../component';

const mockedHookData = {
  formik,
  isLoading: false,
  isResendLoading: false,
  onResendClickHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('RecoverPassword component', () => {
  const props = {
    email: 'email',
  };

  const component = shallow(<RecoverPassword {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
