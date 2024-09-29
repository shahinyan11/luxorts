import { renderHook } from '@testing-library/react-hooks';

import { dispatch, store } from '__mocks__/react-redux';

import { fetchAboutUsPageData } from 'state/concepts/publicInfo/actions';

import useContainer, { getInitialProps } from '../hook';

jest.mock('state/concepts/publicInfo/selectors', () => ({
  aboutUsPropertiesCountSelector: jest.fn(() => 1),
  aboutUsHostsCountSelector: jest.fn(() => 1),
  aboutUsCitiesCountSelector: jest.fn(() => 1),
}));

describe('AboutUs useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('getInitialProps method', () => {
    const ctx = { store };

    it('should dispatches action fetchAboutUsPageData', async () => {
      await getInitialProps(ctx);

      expect(dispatch).toHaveBeenCalledWith(fetchAboutUsPageData());
    });
  });
});
