import { shallow } from 'enzyme';
import { formik } from '__mocks__/formik';

import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import PersonalInformation from '../component';

formik.values = mockedCurrentUser;
const mockedHookData = {
  formik,
};

jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('PersonalInformation component', () => {
  const component = shallow(<PersonalInformation />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
