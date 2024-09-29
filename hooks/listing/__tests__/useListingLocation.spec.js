import { renderHook } from '@testing-library/react-hooks';

import mockedListing from 'views/__mocks__/mockedListing';

import useListingLocation from '../useListingLocation';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
}));
jest.mock('utils/listing/checkListingCompleteness');

const mockedListingId = 'listingId';
const mockedRouter = {
  query: { listingId: mockedListingId },
};
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => mockedRouter),
}));

describe('useListingLocation hook', () => {
  let result = null;
  const props = { shouldRedirect: true, message: { description: { id: 'message.id' } } };

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(() => useListingLocation(props)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
