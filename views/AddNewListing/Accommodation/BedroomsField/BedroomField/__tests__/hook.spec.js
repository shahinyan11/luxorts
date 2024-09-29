import { act, renderHook } from '@testing-library/react-hooks';
import { useField } from 'formik';
import { mergeDeepRight } from 'ramda';

import { DEFAULT_BEDROOM_CONFIG } from 'constants/listing';
import { ANTD_CLASSNAME } from 'constants';

import disableHtmlElementsByClassName from 'utils/disableHtmlElementsByClassName';

import useContainer from '../hook';

const mockedFieldValue = {
  value: DEFAULT_BEDROOM_CONFIG,
};
jest.mock('formik', () => ({
  useField: jest.fn(() => [mockedFieldValue]),
}));
jest.mock('utils/disableHtmlElementsByClassName');

describe('BedroomField useContainer hook', () => {
  let result = null;
  const props = { index: 0 };

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(() => useContainer(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('returns bedsList', () => {
    it('that equals empty array', () => {
      expect(result.current.bedsList).toEqual([]);
    });

    it('that has list of selected beds', () => {
      useField.mockReturnValueOnce([
        mergeDeepRight(mockedFieldValue, {
          value: {
            customBeds: [{ amount: 1, kind: 'kind' }],
          },
        }),
      ]);

      ({ result } = renderHook(() => useContainer(props)));

      expect(result.current.bedsList).toMatchSnapshot();
    });
  });

  it('onEditHandler should changes state of isEdit', () => {
    expect(result.current.isEdit).toBe(false);

    act(() => {
      result.current.onEditHandler(); // change isEdit to true
    });

    expect(result.current.isEdit).toBe(true);
  });

  describe('disableInputs method', () => {
    it('shouldn`t calls disableHtmlElementsByClassName when isEdit equals false', () => {
      result.current.disableInputs();

      expect(disableHtmlElementsByClassName).not.toHaveBeenCalled();
    });

    describe('should calls disableHtmlElementsByClassName', () => {
      it('when isEdit equals true', () => {
        act(() => {
          result.current.onEditHandler(); // change isEdit to true
        });

        result.current.disableInputs();

        expect(disableHtmlElementsByClassName).toHaveBeenCalledWith(ANTD_CLASSNAME.INPUT_NUMBER);
      });

      it('when isEdit equals false and customBeds are present', () => {
        useField.mockReturnValueOnce([
          mergeDeepRight(mockedFieldValue, {
            value: {
              customBeds: [{ amount: 1, kind: 'kind' }],
            },
          }),
        ]);

        ({ result } = renderHook(() => useContainer(props)));

        result.current.disableInputs();

        expect(disableHtmlElementsByClassName).toHaveBeenCalledWith(ANTD_CLASSNAME.INPUT_NUMBER);
      });
    });
  });
});
