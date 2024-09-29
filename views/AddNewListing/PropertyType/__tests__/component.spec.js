import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';
import mockedBasePropertyTypes from 'views/__mocks__/mockedBasePropertyTypes';

import PropertyType from '../component';

const mockedHookData = {
  formik,
  propertyTypesOptions: mockedBasePropertyTypes,
  tooltip: 'tooltip',
};
jest.mock('hooks/listing/useListingPropertyType', () => jest.fn(() => mockedHookData));

describe('PropertyType component', () => {
  const component = shallow(<PropertyType />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
