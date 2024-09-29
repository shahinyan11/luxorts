import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import ResetPassword from '../component';

const mockedHookData = {
  formik,
  isLoading: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('ResetPassword component', () => {
  const component = shallow(<ResetPassword />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
