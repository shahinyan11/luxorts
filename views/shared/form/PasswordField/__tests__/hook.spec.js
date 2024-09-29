import { renderHook } from '@testing-library/react-hooks';

import { useFieldFormikHelpers } from '__mocks__/formik';
import useContainer from '../hook';

jest.mock('utils/form/passwordStrength', () => ({
  getPasswordStrengthScale: jest.fn(() => 1),
  getStrengthData: jest.fn(() => ({})),
}));

describe('PasswordField useContainer hook', () => {
  const { result } = renderHook(() => useContainer({ name: 'name' }));
  const { setTouched, setValue } = useFieldFormikHelpers;

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('tests `renderVisibilityIcon` method', () => {
    it('matches snapshot when visible equals true', () => {
      expect(result.current.renderVisibilityIcon(true)).toMatchSnapshot();
    });

    it('matches snapshot when visible equals false', () => {
      expect(result.current.renderVisibilityIcon(false)).toMatchSnapshot();
    });
  });

  it('should call setTouched when called `onBlurHandler` method', () => {
    result.current.onBlurHandler();

    expect(setTouched).toHaveBeenCalledWith(true);
  });

  it('should call setValue when called `onChangeHandler` method', () => {
    const event = { target: { value: ' value ' } };
    result.current.onChangeHandler(event);

    expect(setValue).toHaveBeenCalledWith(event.target.value.trim());
  });
});
