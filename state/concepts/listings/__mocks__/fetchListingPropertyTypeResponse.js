export default {
  data: {
    data: {
      id: '325f8a49-5ff7-4e4c-8720-515f9114592e',
      type: 'listing_property_type',
      attributes: {
        type_of_place: 'private_place',
      },
      relationships: {
        property_type: {
          data: {
            id: '33b62965-419c-41b3-a5df-52ae44e13347',
            type: 'property_type',
          },
        },
      },
    },
    included: [
      {
        id: '33b62965-419c-41b3-a5df-52ae44e13347',
        type: 'property_type',
        attributes: {
          name: 'officiis',
        },
      },
    ],
  },
};
