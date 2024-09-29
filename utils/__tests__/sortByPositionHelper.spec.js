import sortByPositionHelper from '../sortByPositionHelper';

it('sortByPositionHelper should subtracts b.position from a.position', () => {
  expect(sortByPositionHelper({ position: 2 }, { position: 1 })).toBe(1);
});
