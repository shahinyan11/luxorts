import checkDateInfo from 'utils/checkDateInfo';

describe('checkDateInfo util', () => {
  const time = new Date(2022, 1, 1);

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(time);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('matches snapshot', () => {
    expect(checkDateInfo(time)).toMatchSnapshot();
  });
});
