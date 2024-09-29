import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';
import SignUp from '../component';

const mockedHookData = {
  formik,
  isLoading: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('SignUp component', () => {
  const component = shallow(<SignUp />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
