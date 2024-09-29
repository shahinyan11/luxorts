import { renderHook } from '@testing-library/react-hooks';

import ROUTES from 'constants/routes';

import useContainer from '../hook';

const mockedRouter = { pathname: ROUTES.DASHBOARD.INDEX.PATH };
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => mockedRouter),
}));

describe('DashboardHeader useContainer hook', () => {
  let result = null;
  ({ result } = renderHook(() => useContainer({})));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('matches snapshot when selectedKey is present', () => {
    ({ result } = renderHook(() => useContainer({ selectedKey: ROUTES.DASHBOARD.LISTINGS.KEY })));

    expect(result.current).toMatchSnapshot();
  });
});
