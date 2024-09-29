import { act, renderHook } from '@testing-library/react-hooks';
import { pick } from 'ramda';

import { LISTING_FILTER_KEY, LISTING_FILTERS } from 'constants/listing/manageListings';

import { formik } from '__mocks__/formik';

import useContainer from '../hook';

describe('AmenitiesFilter useContainer hook', () => {
  let result = null;
  const props = { amenities: [{ name: 'name', id: 'id' }], filters: {}, onFilter: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(() => useContainer(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('onSearchChangeHandler method should updates search state', () => {
    expect(result.current.search).toBe('');

    act(() => {
      result.current.onSearchChangeHandler({ target: { value: 'search query' } });
    });

    expect(result.current.search).toBe('search query');
  });

  it('onApply method should calls props.onFilter and sets visible to false', () => {
    act(() => {
      result.current.setVisible(true);
    });

    expect(result.current.visible).toBe(true);

    act(() => {
      result.current.onApply();
    });

    expect(props.onFilter).toHaveBeenCalledWith(formik.values);
    expect(result.current.visible).toBe(false);
  });

  it('onClear method should calls props.onFilter and formik.resetForm', () => {
    result.current.onClear();

    expect(props.onFilter).toHaveBeenCalledWith(
      pick([LISTING_FILTER_KEY.AMENITIES_IN], LISTING_FILTERS),
    );
    expect(formik.resetForm).toHaveBeenCalled();
  });
});
