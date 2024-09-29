import { renderHook } from '@testing-library/react-hooks';

import { dispatch, store } from '__mocks__/react-redux';

import { fetchTermsPageData } from 'state/concepts/publicInfo/actions';

import mockedTerms from 'views/__mocks__/mockedTerms';
import mockedTermsTitles from 'views/__mocks__/mockedTermsTitles';

import useContainer, { getInitialProps } from '../hook';

jest.mock('state/concepts/publicInfo/selectors', () => ({
  termsSelector: jest.fn(() => mockedTerms),
}));
jest.mock('utils/buildTitles', () =>
  jest.fn(() => ({
    titles: mockedTermsTitles,
    htmlString: 'htmlString',
  })),
);

describe('Terms useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('getInitialProps method', () => {
    const ctx = { store };

    it('should dispatches action fetchTermsPageData', async () => {
      await getInitialProps(ctx);

      expect(dispatch).toHaveBeenCalledWith(fetchTermsPageData());
    });
  });
});
