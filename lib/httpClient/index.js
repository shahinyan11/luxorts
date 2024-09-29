import Axios from 'axios';
import qs from 'qs';

import { API_HOST, API_VERSION } from 'constants';

const buildHttpClient = () =>
  Axios.create({
    baseURL: `${API_HOST}${API_VERSION}`,
    headers: {
      // workaround for axios bug https://github.com/axios/axios/issues/1664#issuecomment-415492981
      common: {},
    },
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'brackets' }),
  });

export { default as mountInterceptors } from 'lib/httpClient/mountInterceptors';
export default buildHttpClient;
