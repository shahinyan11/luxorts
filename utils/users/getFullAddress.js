const getFullAddress = (location) => {
  const street = location.street ? `${location.street},` : '';
  const city = location.city ? `${location.city},` : '';
  const state = location.state ? `${location.state}` : '';
  const zipCode = location.zipCode ? `${location.zipCode},` : '';
  const country = location.country ? `${location.country}` : '';

  return `${street} ${city} ${state} ${zipCode} ${country}`.trim();
};

export default getFullAddress;
