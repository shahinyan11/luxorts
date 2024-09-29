import makeSelectedItem from '../makeSelectedItem';

it('makeSelectedItem util returns modified object', () => {
  const item = {
    id: 'id',
    name: 'name',
    description: 'description',
    selectedId: 'selectedId',
    checked: false,
    paid: false,
  };

  const expected = {
    foo: 'id',
    name: 'name',
    description: 'description',
    delete: true,
    paid: false,
  };

  expect(makeSelectedItem('foo')(item)).toEqual(expected);
});
