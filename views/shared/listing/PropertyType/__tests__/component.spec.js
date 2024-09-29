import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';
import mockedBasePropertyTypes from 'views/__mocks__/mockedBasePropertyTypes';

import ListingPropertyType from '../component';

describe('ListingPropertyType component', () => {
  const props = {
    formik,
    propertyTypesOptions: mockedBasePropertyTypes,
    tooltip: 'tooltip',
  };
  const component = shallow(<ListingPropertyType {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
