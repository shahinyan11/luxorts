import createPathWithId from '../createPathWithId';

it('createPathWithId should returns path from prefix and slug', () => {
  expect(createPathWithId('/prefix', 'slug')).toBe('/prefix/slug/[id]');
});
