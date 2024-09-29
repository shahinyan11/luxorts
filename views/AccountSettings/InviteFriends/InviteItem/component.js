import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { INVITATION_STATUSES } from 'constants';

import useContainer from './hook';

const InviteItem = ({ email, resendable, id, status }) => {
  const { resendHandler } = useContainer({ id });

  return (
    <div className="personal-information__item mb-24">
      {INVITATION_STATUSES.ACCEPTED === status && (
        <p className="text-subheader mb-24 personal-information__invite">{email}</p>
      )}
      {INVITATION_STATUSES.PENDING === status && (
        <div className="d-flex justify-content-space-between mb-24 align-items-center">
          <p className="text-subheader personal-information__invite personal-information__invite--disabled mr-16 mb-0">
            {email}
          </p>
          <a onClick={resendHandler} role="button" className="main-text-btn" disabled={!resendable}>
            <FormattedMessage id="shared.resendInvite" />
          </a>
        </div>
      )}
    </div>
  );
};

InviteItem.defaultProps = {
  resendable: false,
};

InviteItem.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.node.isRequired,
  resendable: PropTypes.bool,
  status: PropTypes.string.isRequired,
};

export default memo(InviteItem);
