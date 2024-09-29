import { useSelector } from 'react-redux';

import buildTitles from 'utils/buildTitles';

import { fetchPrivacyPolicyPageData } from 'state/concepts/publicInfo/actions';
import { privacyPolicySelector } from 'state/concepts/publicInfo/selectors';

function useContainer() {
  const { content } = useSelector(privacyPolicySelector);
  const { titles, htmlString } = buildTitles(content);

  return {
    titles,
    htmlString,
  };
}

export const getInitialProps = async (ctx) => {
  ctx.store.dispatch(fetchPrivacyPolicyPageData());
};

export default useContainer;
