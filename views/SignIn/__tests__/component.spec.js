import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';
import SignIn from '../component';

const mockedHookData = {
  formik,
  isLoading: false,
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('SignIn component', () => {
  const component = shallow(<SignIn />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
