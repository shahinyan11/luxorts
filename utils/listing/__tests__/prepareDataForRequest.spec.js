import prepareDataForRequest from 'utils/listing/prepareDataForRequest';

it('prepareDataForRequest util', () => {
  const data = [
    {
      id: 'id',
      description: 'description',
      name: 'name',
      status: 'active',
      checked: false,
      selectedId: 'selectedId-1',
    },
    {
      id: 'id',
      description: 'description',
      name: 'name',
      status: 'not_approved',
      checked: false,
      selectedId: 'selectedId-2',
    },
  ];

  const expected = {
    items: [
      {
        id: 'id',
        delete: true,
        name: 'name',
        description: 'description',
      },
      {
        id: 'id',
        delete: true,
        name: 'name',
        description: 'description',
      },
    ],
    ids: ['id'],
    relatedIds: ['selectedId-1', 'selectedId-2'],
  };

  expect(prepareDataForRequest(data)).toEqual(expected);
});
