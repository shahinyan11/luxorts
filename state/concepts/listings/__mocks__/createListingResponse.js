export default {
  data: {
    data: {
      id: '83b0e92f-795b-4b3a-b527-0cd672dc9495',
      type: 'listing',
      attributes: {
        application_step: 'accomodation',
        status: 'in_draft',
      },
      relationships: {
        user_account: {
          data: {
            id: '06e67ade-80c5-46ef-8908-c14bad84f9fa',
            type: 'host_account',
          },
        },
        listing_property_type: {
          data: {
            id: '86b13618-08b3-42a3-8380-12b639411bca',
            type: 'listing_property_type',
          },
        },
        listing_location: {
          data: null,
        },
        listing_description: {
          data: null,
        },
      },
    },
    included: [
      {
        id: 'af39def7-be38-4027-9f06-a26d2d600044',
        type: 'property_type',
        attributes: {
          name: 'pariatur',
        },
      },
      {
        id: '86b13618-08b3-42a3-8380-12b639411bca',
        type: 'listing_property_type',
        attributes: {
          type_of_place: 'entire_room',
        },
        relationships: {
          property_type: {
            data: {
              id: 'af39def7-be38-4027-9f06-a26d2d600044',
              type: 'property_type',
            },
          },
        },
      },
      {
        id: '06e67ade-80c5-46ef-8908-c14bad84f9fa',
        type: 'host_account',
        attributes: {
          email: 'claud.bosco@runolfssonhalvorson.ca',
          public_id: 'RhGZjbl6',
          verified_status: 'phone_verified',
          status: 'active',
        },
        relationships: {
          user_profile: {
            data: null,
          },
        },
      },
    ],
  },
};
