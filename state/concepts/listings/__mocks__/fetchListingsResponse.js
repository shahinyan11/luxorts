export default {
  data: {
    data: [
      {
        id: '7c749da7-752d-49c8-80ea-aa6977bee6bc',
        type: 'listing',
        attributes: {
          application_step: 'finished',
          title: 'Lenora Spinka',
          status: 'in_draft',
          hidden_title: 'Bess Greenfelder',
          guests_number: 13,
          beds_amount: 16,
          bedrooms_amount: 1,
          bathrooms_amount: 1,
          location: 'Baltimore, Maryland, United States',
          created_at: '2022-07-08T08:38:03.619Z',
          updated_at: '2022-07-08T08:38:03.619Z',
        },
        relationships: {
          main_listing_photo: {
            data: {
              id: '5c51fcbe-6303-4c5d-af99-e983138d42ae',
              type: 'listing_photo',
            },
          },
        },
      },
    ],
    included: [
      {
        id: '5c51fcbe-6303-4c5d-af99-e983138d42ae',
        type: 'listing_photo',
        attributes: {
          photo_urls: {
            small:
              'memory://listingphoto/5c51fcbe-6303-4c5d-af99-e983138d42ae/photo/small-65e0a9233425086de361327ab0b71516.jpg',
            medium:
              'memory://listingphoto/5c51fcbe-6303-4c5d-af99-e983138d42ae/photo/medium-0478517e0a2ba650ae0554fe128f57d4.jpg',
            original:
              'memory://listingphoto/5c51fcbe-6303-4c5d-af99-e983138d42ae/photo/f8c45073f7146f4e6b3fb95455e9118e.jpg',
          },
          position: 1,
          description:
            'b6ej7q6xv7unn1w3w4dkq841c597dfxu0e7vm3y9a5c2q37x9uwwkb0zdc60es2mheo05e6yovbsr6slqesa5uz6t0yh0rk88n713s80fu82mbq1ane5imzzs9mv7ovyvqjyd4kv43d9oov1odov4bxl3naoutrryql0auzvucqyr1ojqxbey0lolqkiv8n7wtpkrlncakkx3sztk9k7zquioyh12ogiz7fuepy8k9im1ybvduvw17exhwq0h2o',
        },
      },
    ],
    meta: {
      total: 1,
    },
    links: {
      self: 1,
      last: 1,
    },
  },
};
