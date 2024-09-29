import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';
import { compose, flatten, map, values } from 'ramda';

import showErrorNotifications from 'utils/showErrorNotifications';
import assignFormErrors from 'utils/form/assignFormErrors';
import isPresent from 'utils/isPresent';
import redirect from 'utils/redirect';
import prepareDataForRequest from 'utils/listing/prepareDataForRequest';

import { UPDATE_LISTING_HOUSE_RULES } from 'state/concepts/listings/types';
import { dataApiFailure, dataApiRequest, dataApiSuccess, dataDelete } from 'state/data/actions';
import { updateListingHouseRulesEndpoint } from 'state/concepts/listings/endpoints';
import { showMessage } from 'state/flash-messages/actions';

const updateListingHouseRules = createLogic({
  type: UPDATE_LISTING_HOUSE_RULES,
  latest: true,

  async process({ action: { values: formValues, form }, httpClient }, dispatch, done) {
    const { endpoint, url } = updateListingHouseRulesEndpoint(formValues.listingId);

    dispatch(dataApiRequest({ endpoint }));

    try {
      const flattenHouseRules = compose(flatten, map(values), values)(formValues.houseRules);
      const { items, ids, relatedIds } = prepareDataForRequest(flattenHouseRules);

      const body = {
        house_rules: isPresent(formValues.additional.name)
          ? [...items, formValues.additional]
          : items,
      };

      const { data } = await httpClient.put(url, body);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));

      // clear data reducer
      dispatch(dataDelete({ kind: 'houseRule', ids }));
      dispatch(dataDelete({ kind: 'listingHouseRule', ids: relatedIds }));

      if (isPresent(formValues.message)) {
        dispatch(showMessage(formValues.message));
      }

      if (isPresent(formValues.redirectRoute)) {
        redirect(formValues.redirectRoute);
      }
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      assignFormErrors(form, error);
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default updateListingHouseRules;
