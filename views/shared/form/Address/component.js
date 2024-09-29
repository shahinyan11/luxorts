import allCountries from 'country-region-data/data.json';

import SelectField from 'views/shared/form/SelectField';
import InputField from 'views/shared/form/InputField';
import CountryOption from 'views/shared/form/Address/CountryOption';
import RegionOption from 'views/shared/form/Address/RegionOption';

import isPresent from 'utils/isPresent';

import useContainer from './hook';

const REGIONS_BY_COUNTRY_NAME = allCountries.reduce(
  (acc, current) => ({
    ...acc,
    [current.countryName]: current.regions,
  }),
  {},
);

const Address = () => {
  const { formik } = useContainer();
  const isCountryPresent = isPresent(formik.values.country);

  return (
    <>
      <SelectField
        name="country"
        label={{ id: 'shared.country' }}
        placeholder={{ id: 'shared.selectCountry' }}
        optionComponent={CountryOption}
        options={allCountries}
        showSearch
      />
      <InputField name="street" label={{ id: 'shared.street' }} />
      <InputField name="apartmentNumber" label={{ id: 'shared.suiteApartmentNumberOptional' }} />
      <div className="container-two-items">
        <InputField name="city" label={{ id: 'shared.city' }} disabled={!isCountryPresent} />
        <SelectField
          name="state"
          label={{ id: 'shared.stateRegion' }}
          placeholder={{ id: 'shared.selectStateRegion' }}
          disabled={!isCountryPresent}
          optionComponent={RegionOption}
          options={REGIONS_BY_COUNTRY_NAME[formik.values.country]}
          showSearch
        />
      </div>
      <div className="container-two-items">
        <InputField name="zipCode" label={{ id: 'shared.zipCode' }} numbersOnly />
      </div>
    </>
  );
};

export default Address;
