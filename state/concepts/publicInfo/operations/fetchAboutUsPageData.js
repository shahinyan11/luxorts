import { createLogic } from 'redux-logic';
import normalize from 'json-api-normalizer';

import showErrorNotifications from 'utils/showErrorNotifications';

import { dataApiFailure, dataApiRequest, dataApiSuccess } from 'state/data/actions';
import { fetchAboutUsPageDataEndpoint } from 'state/concepts/publicInfo/endpoints';
import { FETCH_ABOUT_US_PAGE_DATA } from 'state/concepts/publicInfo/types';

const fetchAboutUsPageData = createLogic({
  type: FETCH_ABOUT_US_PAGE_DATA,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { endpoint, url } = fetchAboutUsPageDataEndpoint;

    dispatch(dataApiRequest({ endpoint }));

    try {
      const { data } = await httpClient.get(url);
      const response = normalize(data, { endpoint });

      dispatch(dataApiSuccess({ response, endpoint }));
    } catch (error) {
      showErrorNotifications({ error, dispatch });
      dispatch(dataApiFailure({ endpoint }));
    }

    done();
  },
});

export default fetchAboutUsPageData;
