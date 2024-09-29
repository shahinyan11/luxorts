import PropTypes from 'prop-types';
import { Dropdown, Skeleton, Tabs } from 'antd';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';

import ROUTES from 'constants/routes';
import { EDIT_LISTING_TABS } from 'constants/listing/edit';
import { LISTING_IMAGE_PLACEHOLDER } from 'constants/listing';

import { createRoute } from 'utils/createRouteHelpers';

import DashboardHeader from 'views/shared/headers/DashboardHeader';
import GradientButton from 'views/shared/GradientButton';
import SvgIcon from 'views/shared/SvgIcon';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

import useContainer, { getInitialProps } from './hook';

const EditListingLayout = ({ children }) => {
  const {
    listingId,
    listing,
    listings,
    activeKey,
    total,
    isListingPresent,
    selectedListingTitle,
    selectedListingDescription,
    onTabClick,
    onDropdownMenuItemClick,
    onScrollNext,
  } = useContainer();

  return (
    <div className="main-layout">
      <DashboardHeader selectedKey={ROUTES.DASHBOARD.LISTINGS.KEY} />
      <div className="main-layout__content main-layout__content--full-width">
        <div className="listing-panel">
          <div className="listing-panel__container">
            <Dropdown
              placement="bottomLeft"
              overlay={
                <ul id="scrollable-target" className="listing-panel__list">
                  <InfiniteScroll
                    scrollableTarget="scrollable-target"
                    dataLength={listings.length}
                    next={onScrollNext}
                    hasMore={total > listings.length}
                    loader={
                      <p className="text-align-center mt-8">
                        <b>
                          <FormattedMessage id="shared.loadingDots" />
                        </b>
                      </p>
                    }
                    endMessage={
                      <p className="text-align-center mt-8">
                        <b>
                          <FormattedMessage id="shared.youHaveSeenItAll" />
                        </b>
                      </p>
                    }
                  >
                    {listings.map((item) => {
                      const title = item.title || item.hiddenTitle || { id: 'shared.withoutTitle' };

                      return (
                        <li
                          key={item.id}
                          onClick={onDropdownMenuItemClick(item)}
                          className={classNames('listing-panel__item cursor-pointer', {
                            'listing-panel__item--selected': item.id === listingId,
                          })}
                          role="presentation"
                        >
                          <div className="listing-panel__image">
                            <Image
                              alt=""
                              width="68"
                              height="48"
                              src={
                                item?.mainListingPhoto?.photoUrls?.medium ||
                                LISTING_IMAGE_PLACEHOLDER
                              }
                            />
                          </div>
                          <p className="listing-panel__name mb-0">
                            <FormattedOrRawMessage message={title} />
                          </p>
                        </li>
                      );
                    })}
                  </InfiniteScroll>
                </ul>
              }
            >
              <div className="listing-panel__column">
                {!isListingPresent && <Skeleton round avatar paragraph={{ rows: 1 }} active />}
                {isListingPresent && (
                  <div className="listing-panel__column">
                    <div className="listing-panel__image">
                      <Image
                        alt=""
                        width="68"
                        height="48"
                        src={
                          listing?.mainListingPhoto?.photoUrls?.medium || LISTING_IMAGE_PLACEHOLDER
                        }
                      />
                    </div>
                    <div className="listing-panel__content">
                      <h2 className="listing-panel__title mb-0">
                        <FormattedOrRawMessage message={selectedListingTitle} />
                      </h2>
                      {selectedListingDescription && (
                        <p className="listing-panel__text mb-0">{selectedListingDescription}</p>
                      )}
                    </div>
                    <GradientButton
                      className="listing-panel__btn main-btn--icon"
                      variant="tertiary"
                      addonBefore={<SvgIcon icon="arrow-down" className="icon-right" />}
                    />
                  </div>
                )}
              </div>
            </Dropdown>
            <Link href={createRoute({ pathname: ROUTES.LISTING.PATH, id: listingId })}>
              <a target="_blank">
                <GradientButton
                  className="main-btn--medium"
                  text={{ id: 'shared.listingPreview' }}
                />
              </a>
            </Link>
          </div>
        </div>
        <Tabs
          activeKey={activeKey}
          className="w-100 max-width-1440 mr-auto ml-auto"
          tabPosition="left"
          onTabClick={onTabClick}
        >
          {EDIT_LISTING_TABS.map((TAB) => (
            <Tabs.TabPane tab={<FormattedMessage {...TAB.META.TITLE} />} key={TAB.KEY}>
              <section className="new-listing pt-32">{children}</section>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

EditListingLayout.getInitialProps = getInitialProps;

EditListingLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EditListingLayout;
