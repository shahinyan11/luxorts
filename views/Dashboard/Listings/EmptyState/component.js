import Image from 'next/image';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import ROUTES from 'constants/routes';

import GradientButton from 'views/shared/GradientButton';

const EmptyState = ({ showNoResults, hasAppliedFilters, clearAllFilters }) => (
  <div className="listing__empty pt-64 pt-md-128 pb-64 pb-md-128">
    {showNoResults && (
      <>
        <div className="mb-24">
          <Image alt="" src="/images/no-results.png" width="136" height="136" />
        </div>
        <p className="listing__text mb-32">
          <FormattedMessage id="shared.noResultsFound" />
        </p>
        {hasAppliedFilters && (
          <GradientButton
            onClick={clearAllFilters}
            text={{ id: 'shared.clearAllFilters' }}
            className="min-width-140"
          />
        )}
      </>
    )}
    {!showNoResults && (
      <>
        <div className="mb-24">
          <Image alt="" src="/images/empty.png" width="136" height="136" />
        </div>
        <p className="listing__text mb-32">
          <FormattedMessage id="shared.noListingsYet" />
        </p>
        <Link href={ROUTES.ADD_NEW_LISTING.INDEX.PATH}>
          <a>
            <GradientButton text={{ id: 'shared.listYourProperty' }} className="min-width-180" />
          </a>
        </Link>
      </>
    )}
  </div>
);

EmptyState.propTypes = {
  clearAllFilters: PropTypes.func.isRequired,
  hasAppliedFilters: PropTypes.bool.isRequired,
  showNoResults: PropTypes.bool.isRequired,
};

export default EmptyState;
