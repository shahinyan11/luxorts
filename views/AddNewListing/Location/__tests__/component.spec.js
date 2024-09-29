import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import Location from '../component';

const mockedHookData = {
  formik,
};
jest.mock('hooks/listing/useListingLocation', () => jest.fn(() => mockedHookData));

describe('Location component', () => {
  const component = shallow(<Location />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
