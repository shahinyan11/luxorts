import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import Description from '../component';

const mockedHookData = {
  formik,
  onBack: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Description component', () => {
  const component = shallow(<Description />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
