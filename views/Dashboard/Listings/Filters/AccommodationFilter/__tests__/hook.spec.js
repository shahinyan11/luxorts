import { act, renderHook } from '@testing-library/react-hooks';
import { useFormik } from 'formik';
import { pick } from 'ramda';

import {
  ACCOMMODATION_LISTING_FILTER_KEYS,
  LISTING_FILTER_KEY,
  LISTING_FILTERS,
} from 'constants/listing/manageListings';

import useContainer from '../hook';

const mockedFormik = {
  values: {
    [LISTING_FILTER_KEY.BEDS_AMOUNT_EQ]: 1,
  },
  isValid: true,
  resetForm: jest.fn(),
};
jest.mock('formik', () => ({
  useFormik: jest.fn(() => mockedFormik),
}));

describe('AccommodationFilter useContainer hook', () => {
  let result = null;
  const props = { filters: { [LISTING_FILTER_KEY.BEDS_AMOUNT_EQ]: 1 }, onFilter: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(() => useContainer(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('onApply method', () => {
    it('should calls props.onFilter and sets visible to false', () => {
      act(() => {
        result.current.setVisible(true);
      });

      expect(result.current.visible).toBe(true);

      act(() => {
        result.current.onApply();
      });

      expect(props.onFilter).toHaveBeenCalledWith(mockedFormik.values);
      expect(result.current.visible).toBe(false);
    });

    it('shouldn`t calls anything when formik.isValid equals false', () => {
      useFormik.mockReturnValueOnce({
        ...mockedFormik,
        isValid: false,
      });

      ({ result } = renderHook(() => useContainer(props)));

      result.current.onApply();

      expect(props.onFilter).not.toHaveBeenCalledWith(mockedFormik.values);
    });
  });

  it('onClear method should calls props.onFilter and formik.resetForm', () => {
    result.current.onClear();

    expect(props.onFilter).toHaveBeenCalledWith(
      pick(ACCOMMODATION_LISTING_FILTER_KEYS, LISTING_FILTERS),
    );
    expect(mockedFormik.resetForm).toHaveBeenCalled();
  });
});
