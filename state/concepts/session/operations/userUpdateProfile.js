import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import build from 'redux-object';
import { camelCase } from 'lodash';

import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { updateUser } from 'state/concepts/session/actions';

import { showMessage } from 'state/flash-messages/actions';

import { userUpdateProfileEndpoint } from '../endpoints';
import { USER_UPDATE_PROFILE } from '../types';

const userUpdateProfileOperation = createLogic({
  type: USER_UPDATE_PROFILE,
  latest: true,

  async process({ action: { values }, httpClient }, dispatch, done) {
    const { endpoint, url } = userUpdateProfileEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const body = {
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        phone_number: values.phoneNumber,
        date_of_birth: values.dateOfBirth,
        about: values.about,
        gender: values.gender,
        driving_license_first_name: values.drivingLicenseFirstName,
        driving_license_last_name: values.drivingLicenseLastName,
        country: values.country,
        city: values.city,
        state: values.state,
        street: values.street,
        apartment_number: values.apartmentNumber,
        zipCode: values.zipCode,
      };

      const { data } = await httpClient.put(url, body);
      const response = normalize(data);
      const userProfile = build(response, camelCase(data.data.type), data.data.id);

      dispatch(updateUser({ userProfile }));
      dispatch(dataApiSuccess({ endpoint, response }));
      dispatch(
        showMessage({
          description: { id: 'notification.personalInformationUpdated' },
        }),
      );
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default userUpdateProfileOperation;
