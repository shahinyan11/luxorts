export default {
  data: {
    data: {
      id: '3ba25753-9ec6-41bd-83c6-00a8c9a89704',
      type: 'listing_accomodation',
      attributes: {
        guests_number: 14,
        bathrooms_amount: 1,
        bedrooms_amount: 1,
      },
      relationships: {
        listing_bathrooms: {
          data: [
            {
              id: '6e51c043-4b8d-4f01-919e-f5642b579e13',
              type: 'listing_bathroom',
            },
          ],
        },
        listing_bedrooms: {
          data: [
            {
              id: '1951f4a1-cbc1-485e-a170-23515e919729',
              type: 'listing_bedroom',
            },
          ],
        },
      },
    },
    included: [
      {
        id: '173f0d59-dddd-4d55-ae7c-32698ae3ae0e',
        type: 'listing_bath',
        attributes: {
          kind: 'jaclyn',
          amount: 6,
        },
        relationships: {
          listing_bathroom: {
            data: {
              id: '6e51c043-4b8d-4f01-919e-f5642b579e13',
              type: 'listing_bathroom',
            },
          },
        },
      },
      {
        id: '30a41b88-1f82-4d3c-b67a-ca6d3235f603',
        type: 'listing_bath',
        attributes: {
          kind: 'bathtub',
          amount: 5,
        },
        relationships: {
          listing_bathroom: {
            data: {
              id: '6e51c043-4b8d-4f01-919e-f5642b579e13',
              type: 'listing_bathroom',
            },
          },
        },
      },
      {
        id: '6e51c043-4b8d-4f01-919e-f5642b579e13',
        type: 'listing_bathroom',
        relationships: {
          default_baths: {
            data: [
              {
                id: '30a41b88-1f82-4d3c-b67a-ca6d3235f603',
                type: 'listing_bath',
              },
            ],
          },
          custom_baths: {
            data: [
              {
                id: '173f0d59-dddd-4d55-ae7c-32698ae3ae0e',
                type: 'listing_bath',
              },
            ],
          },
        },
      },
      {
        id: 'acaa1382-1e99-4dcd-a51e-263eb4c843c9',
        type: 'listing_bed',
        attributes: {
          kind: 'lynne_watsica',
          amount: 2,
        },
        relationships: {
          listing_bedroom: {
            data: {
              id: '1951f4a1-cbc1-485e-a170-23515e919729',
              type: 'listing_bedroom',
            },
          },
        },
      },
      {
        id: '92fef2c6-bb82-4e57-aff7-515dfd8f1ca3',
        type: 'listing_bed',
        attributes: {
          kind: 'queen',
          amount: 2,
        },
        relationships: {
          listing_bedroom: {
            data: {
              id: '1951f4a1-cbc1-485e-a170-23515e919729',
              type: 'listing_bedroom',
            },
          },
        },
      },
      {
        id: '1951f4a1-cbc1-485e-a170-23515e919729',
        type: 'listing_bedroom',
        relationships: {
          custom_beds: {
            data: [
              {
                id: 'acaa1382-1e99-4dcd-a51e-263eb4c843c9',
                type: 'listing_bed',
              },
            ],
          },
          default_beds: {
            data: [
              {
                id: '92fef2c6-bb82-4e57-aff7-515dfd8f1ca3',
                type: 'listing_bed',
              },
            ],
          },
        },
      },
    ],
  },
};
