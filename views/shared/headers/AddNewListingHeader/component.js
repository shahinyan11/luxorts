import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

import ROUTES from 'constants/routes';
import GradientButton from 'views/shared/GradientButton';

const AddNewListingHeader = ({ onExit, title, btnDisabled }) => (
  <header className="main-header">
    <div className="main-header__container">
      <Link href={ROUTES.INDEX.PATH}>
        <a className="main-header__logo">
          <Image src="/images/logo.svg" alt="" width="138" height="32" />
        </a>
      </Link>
      <div className="d-flex flex-wrap flex-column flex-sm-row justify-content-space-between align-items-center w-100">
        <p className="text-body-2 mb-0 ml-auto ml-md-24 mb-8 mb-sm-0">
          <FormattedMessage {...title} />
        </p>
        <GradientButton
          disabled={btnDisabled}
          onClick={onExit}
          className="main-btn--medium min-width-120 ml-auto ml-md-0"
          variant="tertiary"
          text={{ id: 'shared.saveAndExit' }}
        />
      </div>
    </div>
  </header>
);

AddNewListingHeader.defaultProps = {
  btnDisabled: false,
};

AddNewListingHeader.propTypes = {
  title: PropTypes.shape().isRequired,
  onExit: PropTypes.func.isRequired,
  btnDisabled: PropTypes.bool,
};

export default AddNewListingHeader;
