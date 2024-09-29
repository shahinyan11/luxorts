import { renderHook } from '@testing-library/react-hooks';
import { useFormikContext } from 'formik';
import { mergeDeepRight } from 'ramda';

import useContainer from '../hook';

const mockedFormik = {
  values: {
    country: null,
    street: '',
    apartmentNumber: '',
    city: '',
    state: null,
    zipCode: '',
  },
  dirty: false,
  setFormikState: jest.fn(),
};
jest.mock('formik', () => ({
  useFormikContext: jest.fn(() => mockedFormik),
}));

describe('Address useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('onCountryChange method', () => {
    it('shouldn`t calls setFormikState when country and state aren`t presents', () => {
      result.current.onCountryChange();

      expect(mockedFormik.setFormikState).not.toHaveBeenCalled();
    });

    it('shouldn`t calls setFormikState when country is present, but state isn`t present', () => {
      useFormikContext.mockReturnValueOnce(
        mergeDeepRight(mockedFormik, {
          values: {
            country: 'country',
          },
        }),
      );

      ({ result } = renderHook(useContainer));

      result.current.onCountryChange();

      expect(mockedFormik.setFormikState).not.toHaveBeenCalled();
    });

    it('shouldn`t calls setFormikState when country isn`t present, but state is present', () => {
      useFormikContext.mockReturnValueOnce(
        mergeDeepRight(mockedFormik, {
          values: {
            state: 'state',
          },
        }),
      );

      ({ result } = renderHook(useContainer));

      result.current.onCountryChange();

      expect(mockedFormik.setFormikState).not.toHaveBeenCalled();
    });

    it('shouldn`t calls setFormikState when country and state are presents, but formik.dirty equals false', () => {
      useFormikContext.mockReturnValueOnce(
        mergeDeepRight(mockedFormik, {
          values: {
            country: 'country',
            state: 'state',
          },
        }),
      );

      ({ result } = renderHook(useContainer));

      result.current.onCountryChange();

      expect(mockedFormik.setFormikState).not.toHaveBeenCalled();
    });

    it('should calls setFormikState when country and state are presents, and formik.dirty equals true', () => {
      const formikState = mergeDeepRight(mockedFormik, {
        values: {
          country: 'country',
          state: 'state',
        },
        dirty: true,
      });

      useFormikContext.mockReturnValueOnce(formikState);

      ({ result } = renderHook(useContainer));

      const expected = mergeDeepRight(formikState, {
        values: {
          state: null,
        },
        touched: {
          state: false,
        },
      });

      result.current.onCountryChange();

      expect(mockedFormik.setFormikState).toHaveBeenCalledWith(expected);
    });
  });
});
