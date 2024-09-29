import { renderHook } from '@testing-library/react-hooks';

import { dispatch, store } from '__mocks__/react-redux';

import { fetchPrivacyPolicyPageData } from 'state/concepts/publicInfo/actions';

import mockedPrivacyPolicy from 'views/__mocks__/mockedPrivacyPolicy';
import mockedPrivacyPolicyTitles from 'views/__mocks__/mockedPrivacyPolicyTitles';

import useContainer, { getInitialProps } from '../hook';

jest.mock('state/concepts/publicInfo/selectors', () => ({
  privacyPolicySelector: jest.fn(() => mockedPrivacyPolicy),
}));
jest.mock('utils/buildTitles', () =>
  jest.fn(() => ({
    titles: mockedPrivacyPolicyTitles,
    htmlString: 'htmlString',
  })),
);

describe('PrivacyPolicy useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('getInitialProps method', () => {
    const ctx = { store };

    it('should dispatches action fetchPrivacyPolicyPageData', async () => {
      await getInitialProps(ctx);

      expect(dispatch).toHaveBeenCalledWith(fetchPrivacyPolicyPageData());
    });
  });
});
