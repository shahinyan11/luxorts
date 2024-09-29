import equalsByPath from '../equalsByPath';

describe('equalsByPath util', () => {
  it('should returns true when id equals', () => {
    expect(equalsByPath('id', ['amenity', 'id'])({ amenity: { id: 'id' } })).toBe(true);
  });

  it('should returns false when id does not equals', () => {
    expect(equalsByPath('test', ['amenity', 'id'])({ amenity: { id: 'id' } })).toBe(false);
  });
});
