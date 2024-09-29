import { shallow } from 'enzyme';

import useListingPropertyType from 'hooks/listing/useListingPropertyType';

import { formik } from '__mocks__/formik';
import mockedBasePropertyTypes from 'views/__mocks__/mockedBasePropertyTypes';

import PropertyType from '../component';

const mockedHookData = {
  formik,
  propertyTypesOptions: mockedBasePropertyTypes,
  tooltip: 'tooltip',
  showSkeleton: false,
};
jest.mock('hooks/listing/useListingPropertyType', () => jest.fn(() => mockedHookData));

describe('PropertyType component', () => {
  let component = shallow(<PropertyType />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when showSkeleton equals true', () => {
    useListingPropertyType.mockReturnValueOnce({
      ...mockedHookData,
      showSkeleton: true,
    });

    component = shallow(<PropertyType />);

    expect(component).toMatchSnapshot();
  });
});
