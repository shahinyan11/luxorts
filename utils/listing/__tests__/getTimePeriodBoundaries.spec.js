import getTimePeriodBoundaries from '../getTimePeriodBoundaries';

it('getTimePeriodBoundaries util matches snapshot', () => {
  expect(getTimePeriodBoundaries(new Date('15 Jun 2022 00:00:00 GMT'))).toMatchSnapshot();
});
