import { renderHook } from '@testing-library/react-hooks';

import ROUTES from 'constants/routes';

import redirect from 'utils/redirect';
import isAuth from 'utils/auth/isAuth';

import { store } from '__mocks__/react-redux';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/redirect');
jest.mock('utils/auth/isAuth', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));

describe('NewPassword useContainer hook', () => {
  const { result } = renderHook(useContainer);

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('getInitialProps method', () => {
    const ctx = {
      store,
    };

    it('should redirects to homepage when user is authorized', async () => {
      await getInitialProps(ctx);

      expect(redirect).toHaveBeenCalledWith(ROUTES.INDEX.PATH, ctx);
    });

    it('shouldn`t redirects to homepage when user isn`t authorized', async () => {
      redirect.mockClear();
      isAuth.mockReturnValueOnce(false);

      await getInitialProps(ctx);

      expect(redirect).not.toHaveBeenCalled();
    });
  });
});
