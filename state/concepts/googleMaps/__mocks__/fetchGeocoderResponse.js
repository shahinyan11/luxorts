export default {
  data: {
    results: [
      {
        address_components: [
          {
            long_name: '240',
            short_name: '240',
            types: ['street_number'],
          },
          {
            long_name: 'North 7th Avenue',
            short_name: 'N 7th Ave',
            types: ['route'],
          },
          {
            long_name: 'Central City',
            short_name: 'Central City',
            types: ['neighborhood', 'political'],
          },
          {
            long_name: 'Phoenix',
            short_name: 'Phoenix',
            types: ['locality', 'political'],
          },
          {
            long_name: 'Maricopa County',
            short_name: 'Maricopa County',
            types: ['administrative_area_level_2', 'political'],
          },
          {
            long_name: 'Arizona',
            short_name: 'AZ',
            types: ['administrative_area_level_1', 'political'],
          },
          {
            long_name: 'United States',
            short_name: 'US',
            types: ['country', 'political'],
          },
          {
            long_name: '85007',
            short_name: '85007',
            types: ['postal_code'],
          },
        ],
        formatted_address: '240 N 7th Ave, Phoenix, AZ 85007, USA',
        geometry: {
          location: {
            lat: 33.4507026,
            lng: -112.0825682,
          },
          location_type: 'RANGE_INTERPOLATED',
          viewport: {
            northeast: {
              lat: 33.4520515802915,
              lng: -112.0812192197085,
            },
            southwest: {
              lat: 33.4493536197085,
              lng: -112.0839171802915,
            },
          },
        },
        place_id:
          'EiUyNDAgTiA3dGggQXZlLCBQaG9lbml4LCBBWiA4NTAwNywgVVNBIjESLwoUChIJ2dJpcCUSK4cR66Bm3xgAAh8Q8AEqFAoSCRvbefbPEiuHEaoczC_RXv9w',
        types: ['street_address'],
      },
    ],
    status: 'OK',
  },
};
