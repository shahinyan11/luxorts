import { useSelector } from 'react-redux';

import buildTitles from 'utils/buildTitles';

import { fetchTermsPageData } from 'state/concepts/publicInfo/actions';
import { termsSelector } from 'state/concepts/publicInfo/selectors';

function useContainer() {
  const { content } = useSelector(termsSelector);
  const { titles, htmlString } = buildTitles(content);

  return {
    htmlString,
    titles,
  };
}

export const getInitialProps = async (ctx) => {
  ctx.store.dispatch(fetchTermsPageData());
};

export default useContainer;
