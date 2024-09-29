import React from 'react';
import { Form, Pagination } from 'antd';
import { FormattedMessage } from 'react-intl';
import { FormikProvider } from 'formik';
import { isEmpty } from 'ramda';

import { PAGE } from 'constants';

import InviteFriendsLayout from 'views/layouts/InviteFriends';
import GradientButton from 'views/shared/GradientButton';
import SelectField from 'views/shared/form/SelectField';
import Breadcrumb from 'views/shared/Breadcrumb';
import SvgIcon from 'views/shared/SvgIcon';
import PageInfo from 'views/shared/PageInfo';

import InviteItem from './InviteItem';
import useContainer, { getInitialProps } from './hook';

const InviteFriends = () => {
  const {
    formik,
    userInvitation,
    isDisabled,
    isLoading,
    pagination,
    onPageChange,
    userInvitationCount,
  } = useContainer();

  return (
    <div className="personal-information">
      <Breadcrumb />
      <h1 className="text-display-2 mb-lg-64 mb-32">
        <FormattedMessage id="shared.inviteFriends" />
      </h1>
      <div className="personal-information__content">
        <div className="personal-information__user">
          <div className="personal-information__item mb-24">
            <Form layout="vertical" size="large">
              <FormikProvider value={formik}>
                <SelectField
                  label={{ id: 'shared.email' }}
                  name="userInvitations"
                  mode="tags"
                  placeholder={{ id: 'shared.enterEmail' }}
                />
                <GradientButton
                  disabled={isDisabled}
                  loading={isLoading}
                  onClick={formik.handleSubmit}
                  className="min-width-140 mb-24"
                  text={{ id: 'shared.sendInvite' }}
                />
              </FormikProvider>
            </Form>
          </div>
          {!isEmpty(userInvitation) && (
            <p className="personal-information__caption text-body mb-24">
              <FormattedMessage id="shared.invited" values={{ count: userInvitationCount }} />
            </p>
          )}
          {userInvitation.map(({ id, email, resendable, status }) => (
            <InviteItem key={id} id={id} email={email} resendable={resendable} status={status} />
          ))}
          {userInvitationCount > PAGE.size && (
            <Pagination
              onChange={onPageChange}
              current={pagination.number}
              defaultCurrent={pagination.number}
              pageSize={pagination.size}
              total={userInvitationCount}
              showSizeChanger={false}
            />
          )}
        </div>
        <PageInfo
          icon={<SvgIcon icon="guests" className="personal-information__icon" />}
          title={{ id: 'shared.inviteFriends' }}
          description={{ id: 'inviteFriends.info.description' }}
        />
      </div>
    </div>
  );
};

InviteFriends.getInitialProps = getInitialProps;

InviteFriends.Layout = InviteFriendsLayout;

export default InviteFriends;
