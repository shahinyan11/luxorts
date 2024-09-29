import { fetchAboutUsPageData } from 'state/concepts/publicInfo/actions';
import { useSelector } from 'react-redux';

import {
  aboutUsCitiesCountSelector,
  aboutUsHostsCountSelector,
  aboutUsPropertiesCountSelector,
} from 'state/concepts/publicInfo/selectors';

function useContainer() {
  const propertiesCount = useSelector(aboutUsPropertiesCountSelector);
  const hostsCount = useSelector(aboutUsHostsCountSelector);
  const citiesCount = useSelector(aboutUsCitiesCountSelector);

  return {
    propertiesCount,
    hostsCount,
    citiesCount,
  };
}

export const getInitialProps = async (ctx) => {
  ctx.store.dispatch(fetchAboutUsPageData());
};

export default useContainer;
