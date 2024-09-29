import { shallow } from 'enzyme';

import { LISTING_FILTER_KEY } from 'constants/listing/manageListings';

import useContainer from '../hook';
import StatusFilter from '../component';

const mockedHookData = {
  visible: true,
  formik: {
    values: {
      [LISTING_FILTER_KEY.STATUS_IN]: [],
    },
  },
  onVisibilityChangeHandler: jest.fn(),
  onApply: jest.fn(),
  onClear: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('StatusFilter component', () => {
  const props = {
    filters: {
      [LISTING_FILTER_KEY.STATUS_IN]: [],
    },
    onFilter: jest.fn(),
  };
  let component = shallow(<StatusFilter {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when formik.values[LISTING_FILTER_KEY.STATUS_IN].length more than 0', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      formik: {
        values: {
          [LISTING_FILTER_KEY.STATUS_IN]: [{}],
        },
      },
    });

    component = shallow(<StatusFilter {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when filters[LISTING_FILTER_KEY.STATUS_IN].length more than 0', () => {
    component.setProps({
      filters: {
        [LISTING_FILTER_KEY.STATUS_IN]: [{}],
      },
    });

    expect(component).toMatchSnapshot();
  });
});
