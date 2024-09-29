export default {
  data: {
    data: [
      {
        id: '2cc1ef42-6ebe-4898-b8b2-f6cee099454c',
        type: 'listing_service',
        attributes: {
          paid: true,
        },
        relationships: {
          service: {
            data: {
              id: 'ebe4b9d7-c9c0-44fd-80cb-384a88d9de46',
              type: 'service',
            },
          },
        },
      },
    ],
    included: [
      {
        id: 'ebe4b9d7-c9c0-44fd-80cb-384a88d9de46',
        type: 'service',
        attributes: {
          description: 'Iusto quas similique unde distinctio fugiat possimus.',
          name: 'Elane Abshire',
          status: 'active',
        },
      },
    ],
  },
};
