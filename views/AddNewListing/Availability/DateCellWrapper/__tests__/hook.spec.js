import { renderHook } from '@testing-library/react-hooks';

import mockedListingBlockedTimePeriods from 'views/__mocks__/mockedListingBlockedTimePeriods';

import useContainer from '../hook';

describe('DateCellWrapper useContainer hook', () => {
  const time = new Date(2022, 1, 1);
  const props = {
    value: time,
    listingBlockedTimePeriods: mockedListingBlockedTimePeriods,
    children: {},
  };

  const { result } = renderHook(() => useContainer(props));

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(time);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
