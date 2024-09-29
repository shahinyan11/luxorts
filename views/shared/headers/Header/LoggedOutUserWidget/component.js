import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

import ROUTES from 'constants/routes';

import { createRoute } from 'utils/createRouteHelpers';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';

const LoggedOutUserWidget = () => (
  <div className="d-flex flex-wrap justify-content-flex-end align-items-center">
    <Link
      href={createRoute({
        pathname: ROUTES.SIGN_IN.PATH,
        query: { redirect: ROUTES.ADD_NEW_LISTING.INDEX.PATH },
      })}
    >
      <a>
        <GradientButton text={{ id: 'shared.listYourProperty' }} className="main-btn--medium" />
      </a>
    </Link>
    <GradientButton
      variant="default"
      className="main-btn--icon main-btn--medium ml-12 mr-12 main-header__language"
      addonAfter={<SvgIcon icon="globe" className="icon-right" />}
    />
    <Link href={ROUTES.SIGN_UP.PATH}>
      <a className="main-link main-link--primary mr-24">
        <FormattedMessage id="shared.signUp" />
      </a>
    </Link>
    <Link href={ROUTES.SIGN_IN.PATH}>
      <a className="main-link main-link--primary">
        <FormattedMessage id="shared.signIn" />
      </a>
    </Link>
  </div>
);

export default LoggedOutUserWidget;
