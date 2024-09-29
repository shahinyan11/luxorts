import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import LocationMap from '../component';

const mockedHookData = {
  formik: {
    ...formik,
    values: {
      street: 'street',
      city: 'city',
      state: 'state',
      zipCode: 'zipCode',
      country: 'country',
    },
  },
};
jest.mock('hooks/listing/useListingLocationMap', () => jest.fn(() => mockedHookData));

describe('LocationMap component', () => {
  const component = shallow(<LocationMap />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('children matches snapshot', () => {
    expect(component.find('LocationMap').dive()).toMatchSnapshot();
  });
});
