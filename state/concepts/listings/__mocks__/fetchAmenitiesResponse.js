export default {
  data: {
    data: [
      {
        id: '5e066ad7-4194-4bd4-95ec-0d9715f8159b',
        type: 'amenity',
        attributes: {
          description: 'Maiores porro nostrum dolorum sunt.',
          name: 'Nolan Kertzmann',
          status: 'active',
          category: null,
        },
        relationships: {
          amenity_group: {
            data: {
              id: '6e9e46fd-d1d6-4a9a-920f-0360abc10bc6',
              type: 'amenity_group',
            },
          },
        },
      },
      {
        id: 'c277033f-1683-4d2d-a409-d00b0bbe8201',
        type: 'amenity',
        attributes: {
          description: 'Nemo magnam dolores quam voluptatibus distinctio unde.',
          name: 'Stephine Rohan',
          status: 'active',
          category: null,
        },
        relationships: {
          amenity_group: {
            data: {
              id: '1ae02fe9-0c6b-4e31-b1ae-7410e2bbc9ed',
              type: 'amenity_group',
            },
          },
        },
      },
    ],
    included: [
      {
        id: '6e9e46fd-d1d6-4a9a-920f-0360abc10bc6',
        type: 'amenity_group',
        attributes: {
          name: 'Amina Heaney',
        },
      },
      {
        id: '1ae02fe9-0c6b-4e31-b1ae-7410e2bbc9ed',
        type: 'amenity_group',
        attributes: {
          name: 'Torrie Sawayn',
        },
      },
    ],
  },
};
