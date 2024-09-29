export default {
  data: {
    data: [
      {
        id: '4383b292-33e1-495d-8446-e07182a4031c',
        type: 'listing_amenity',
        relationships: {
          amenity: {
            data: {
              id: 'dc9b89ec-ce1d-453d-8736-5f700041529c',
              type: 'amenity',
            },
          },
        },
      },
      {
        id: '38350235-6bfe-47cb-8652-0ee9e0a8ab38',
        type: 'listing_amenity',
        relationships: {
          amenity: {
            data: {
              id: 'cc3a57ba-3342-4362-afd8-6c7c66705d9d',
              type: 'amenity',
            },
          },
        },
      },
    ],
    included: [
      {
        id: 'dc9b89ec-ce1d-453d-8736-5f700041529c',
        type: 'amenity',
        attributes: {
          description: 'Officiis iusto ut nostrum at in.',
          name: 'Dotty Armstrong',
          status: 'active',
          category: null,
        },
        relationships: {
          amenity_group: {
            data: {
              id: '96dff415-722a-4526-998a-86beb6b6c115',
              type: 'amenity_group',
            },
          },
        },
      },
      {
        id: 'cc3a57ba-3342-4362-afd8-6c7c66705d9d',
        type: 'amenity',
        attributes: {
          description: 'Sunt eaque temporibus odio tempore possimus harum adipisci amet.',
          name: 'Carylon Wolff',
          status: 'active',
          category: null,
        },
        relationships: {
          amenity_group: {
            data: {
              id: 'acb61d24-f7fc-417e-abcc-1b55687815ad',
              type: 'amenity_group',
            },
          },
        },
      },
    ],
  },
};
