import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import NewPassword from '../component';

const mockedHookData = {
  formik,
  isLoading: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('NewPassword component', () => {
  const component = shallow(<NewPassword />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
