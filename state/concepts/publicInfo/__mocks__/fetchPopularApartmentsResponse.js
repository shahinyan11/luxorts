export default {
  data: {
    data: [
      {
        id: '06a30f07-23b5-4900-b83c-b56986f119bc',
        type: 'listing',
        attributes: {
          bedrooms_amount: 1,
          baths_amount: 28,
          property_type_name: 'voluptatum',
          title: 'Alta Kling',
          guests_number: 3,
          beds_amount: 10,
          description: 'Vanessa Swift',
          type_of_place: 'shared_room',
          price_per_day: 6860000,
        },
        relationships: {
          limited_listing_photos: {
            data: [
              {
                id: 'bf4f23e4-bf5a-41f6-9bd3-7f18e3d55cf7',
                type: 'listing_photo',
              },
            ],
          },
        },
      },
    ],
    included: [
      {
        id: 'bf4f23e4-bf5a-41f6-9bd3-7f18e3d55cf7',
        type: 'listing_photo',
        attributes: {
          photo_urls: {
            small:
              'memory://listingphoto/bf4f23e4-bf5a-41f6-9bd3-7f18e3d55cf7/photo/small-21bf20aee591b473fd9bf94b1da2fdeb.jpg',
            medium:
              'memory://listingphoto/bf4f23e4-bf5a-41f6-9bd3-7f18e3d55cf7/photo/medium-d7964c233b11a9dc73ea331b80117253.jpg',
            original:
              'memory://listingphoto/bf4f23e4-bf5a-41f6-9bd3-7f18e3d55cf7/photo/56b59ca02c0db00b4d90f835501b8f97.jpg',
          },
          position: 1,
          description:
            'b5ln4wae0893f39lds2pnoc0cn8eorr3257at5h8yzvnq5o80zj0cfd5m99to629co23bc0vr9mrmdq9iyigdhobsq7idwy43aa95z9a7njgr62ya9v7lvjj3dkz3xqoazz5vha6ufi59mr3gdsdca5iorvqxmcjcfnrjxbknt8tbr4uvu64gj7a0miwtwufudprgtz700j4g5hkpgz1stjtn35dc5t8ghi7d18x7wx1r8xyw1qthqd8ip9fugr',
        },
      },
    ],
    links: {
      self: 1,
      last: 1,
    },
  },
};
