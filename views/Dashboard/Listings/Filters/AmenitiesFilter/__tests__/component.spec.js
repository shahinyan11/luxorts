import { shallow } from 'enzyme';

import { LISTING_FILTER_KEY } from 'constants/listing/manageListings';

import useContainer from '../hook';
import AmenitiesFilter from '../component';

const mockedHookData = {
  visible: true,
  formik: {
    values: {
      [LISTING_FILTER_KEY.AMENITIES_IN]: [],
    },
  },
  items: [],
  search: 'search',
  onVisibilityChangeHandler: jest.fn(),
  onSearchChangeHandler: jest.fn(),
  onApply: jest.fn(),
  onClear: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('AmenitiesFilter component', () => {
  const props = {
    amenities: [],
    filters: {
      [LISTING_FILTER_KEY.AMENITIES_IN]: [],
    },
    onFilter: jest.fn(),
  };
  let component = shallow(<AmenitiesFilter {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when formik.values[LISTING_FILTER_KEY.AMENITIES_IN].length more than 0', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      formik: {
        values: {
          [LISTING_FILTER_KEY.AMENITIES_IN]: [{}],
        },
      },
    });

    component = shallow(<AmenitiesFilter {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when filters[LISTING_FILTER_KEY.AMENITIES_IN].length more than 0', () => {
    component.setProps({
      filters: {
        [LISTING_FILTER_KEY.AMENITIES_IN]: [{}],
      },
    });

    expect(component).toMatchSnapshot();
  });
});
