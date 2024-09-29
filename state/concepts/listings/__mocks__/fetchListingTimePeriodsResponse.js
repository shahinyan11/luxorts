export default {
  data: {
    data: [
      {
        id: '1df05496-19da-4474-8ccd-df746da2400f',
        type: 'listing_time_period',
        attributes: { kind: 'available', start_date: '2022-09-01', end_date: '2022-09-05' },
        relationships: {
          listing_time_period_pricing: {
            data: {
              id: 'fe673d57-07f3-456f-9349-59b006343e43',
              type: 'listing_time_period_pricing',
            },
          },
        },
      },
      {
        id: '0d3a5692-37b4-4320-885d-04fe447c34b5',
        type: 'listing_time_period',
        attributes: { kind: 'preparation', start_date: '2022-08-18', end_date: '2022-08-19' },
        relationships: { listing_time_period_pricing: { data: null } },
      },
      {
        id: '2bd10e37-fbff-4d6a-bb9b-55b9ed6d438b',
        type: 'listing_time_period',
        attributes: { kind: 'booking', start_date: '2022-08-20', end_date: '2022-08-22' },
        relationships: { listing_time_period_pricing: { data: null } },
      },
      {
        id: '0f7cdbed-eae2-482a-b8b2-4c5e07cc6d2d',
        type: 'listing_time_period',
        attributes: { kind: 'blocked', start_date: '2022-07-25', end_date: '2022-07-27' },
        relationships: { listing_time_period_pricing: { data: null } },
      },
    ],
    included: [
      {
        id: 'fe673d57-07f3-456f-9349-59b006343e43',
        type: 'listing_time_period_pricing',
        attributes: { weekly_discount: null, mounthly_discount: null, price_per_day: 64.0 },
      },
    ],
  },
};
