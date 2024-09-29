import { useRouter } from 'next/router';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import ROUTES from 'constants/routes';

function useContainer({ selectedKey }) {
  const router = useRouter();

  const menuItems = Object.values(ROUTES.DASHBOARD).map((ROUTE) => {
    const isSelected = selectedKey ? ROUTE.KEY === selectedKey : router.pathname === ROUTE.PATH;

    return {
      key: ROUTE.KEY,
      label: (
        <Link href={ROUTE.PATH}>
          <a>
            <FormattedMessage {...ROUTE.META.TITLE} />
          </a>
        </Link>
      ),
      className: classNames('main-menu__item', isSelected && 'ant-menu-item-selected'),
    };
  });

  return { menuItems };
}

export default useContainer;
