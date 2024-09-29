import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { fetchTermsPageDataEndpoint } from 'state/concepts/publicInfo/endpoints';
import { FETCH_TERMS_PAGE_DATA } from 'state/concepts/publicInfo/types';

const fetchTermsPageData = createLogic({
  type: FETCH_TERMS_PAGE_DATA,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = fetchTermsPageDataEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const { data } = await httpClient.get(url);
      const response = normalize(data);

      dispatch(dataApiSuccess({ response, endpoint }));
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default fetchTermsPageData;
