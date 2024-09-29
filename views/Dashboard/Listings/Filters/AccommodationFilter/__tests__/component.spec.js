import { shallow } from 'enzyme';
import { pick } from 'ramda';

import {
  ACCOMMODATION_LISTING_FILTER_KEYS,
  LISTING_FILTERS,
} from 'constants/listing/manageListings';

import { formik } from '__mocks__/formik';

import useContainer from '../hook';
import AccommodationFilter from '../component';

const mockedHookData = {
  visible: true,
  clearButtonVisible: false,
  formik,
  appliedFilters: 0,
  onVisibilityChangeHandler: jest.fn(),
  onApply: jest.fn(),
  onClear: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('AccommodationFilter component', () => {
  const props = {
    filters: pick(ACCOMMODATION_LISTING_FILTER_KEYS, LISTING_FILTERS),
    onFilter: jest.fn(),
  };
  let component = shallow(<AccommodationFilter {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when clearButtonVisible equals true', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      clearButtonVisible: true,
    });

    component = shallow(<AccommodationFilter {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when appliedFilters equals 1', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      appliedFilters: 1,
    });

    component = shallow(<AccommodationFilter {...props} />);

    expect(component).toMatchSnapshot();
  });
});
