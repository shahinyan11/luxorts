import { FormattedMessage } from 'react-intl';
import { Checkbox, Dropdown, Skeleton, Table } from 'antd';
import Link from 'next/link';
import classNames from 'classnames';

import ROUTES from 'constants/routes';
import {
  LISTING_TABLE_COLUMNS_KEY,
  LISTING_TABLE_SETTINGS,
} from 'constants/listing/manageListings';

import isPresent from 'utils/isPresent';

import DashboardLayout from 'views/layouts/Dashboard';
import GradientButton from 'views/shared/GradientButton';
import SvgIcon from 'views/shared/SvgIcon';

import Filters from './Filters';
import SortButton from './SortButton';
import EmptyState from './EmptyState';

import useContainer, { getInitialProps } from './hook';

const Listings = () => {
  const {
    total,
    isFetching,
    tableColumns,
    dataSource,
    sort,
    pagination,
    settingsVisible,
    settings,
    filters,
    searchQuery,
    amenities,
    hasAppliedFilters,
    onSortClickHandler,
    onPaginationChangeHandler,
    onSettingsChangeHandler,
    onSettingsVisibleChangeHandler,
    onFilter,
    clearAllFilters,
    onSearch,
  } = useContainer();
  const noListings = total === 0;
  const showNoResults = hasAppliedFilters || isPresent(searchQuery);

  if (isFetching) {
    return (
      <section className="listing">
        <div className="listing__header">
          <Skeleton active />
        </div>
      </section>
    );
  }

  return (
    <section className="listing">
      <div className="listing__header mb-24">
        <h1 className="listing__title">
          <FormattedMessage
            id="shared.yourListingsCounter"
            values={{ count: <span className="listing__counter">{total}</span> }}
          />
        </h1>
        {(!noListings || showNoResults) && (
          <Link href={ROUTES.ADD_NEW_LISTING.INDEX.PATH}>
            <a>
              <GradientButton text={{ id: 'shared.addNewListing' }} className="min-width-140" />
            </a>
          </Link>
        )}
      </div>
      <Filters
        amenities={amenities}
        filters={filters}
        onFilter={onFilter}
        onSearch={onSearch}
        searchQuery={searchQuery}
      />
      {noListings && (
        <EmptyState
          clearAllFilters={clearAllFilters}
          hasAppliedFilters={hasAppliedFilters}
          showNoResults={showNoResults}
        />
      )}
      {!noListings && (
        <Table
          showSorterTooltip={false}
          tableLayout="auto"
          scroll={{ x: 1752 }}
          position="center"
          dataSource={dataSource}
          className="table table--listings"
          pagination={{
            position: ['bottomLeft'],
            showSizeChanger: false,
            current: pagination.number,
            pageSize: pagination.size,
            total,
            onChange: onPaginationChangeHandler,
            hideOnSinglePage: true,
          }}
        >
          {tableColumns.map((item) => (
            <Table.Column
              {...item.props}
              key={item.key}
              title={
                item.sortKey ? (
                  <SortButton
                    onClickHandler={onSortClickHandler(item.sortKey)}
                    sortKey={item.sortKey}
                    sort={sort}
                    text={item.label}
                  />
                ) : (
                  <FormattedMessage {...item.label} />
                )
              }
              dataIndex={item.key}
            />
          ))}
          <Table.Column
            title={
              <Dropdown
                trigger="click"
                onVisibleChange={onSettingsVisibleChangeHandler}
                visible={settingsVisible}
                placement="bottomRight"
                className="table__settings"
                overlay={
                  <div className="table__settings-content">
                    <h4 className="table__settings-title mb-16">
                      <FormattedMessage id="shared.columnsSettings" />
                    </h4>
                    <Checkbox.Group
                      className="d-flex flex-column mb-0 table__settings-checkboxes"
                      value={settings}
                      onChange={onSettingsChangeHandler}
                    >
                      {LISTING_TABLE_SETTINGS.map((item) => (
                        <Checkbox
                          className={classNames({
                            'd-none': item.hiddenInSettings,
                          })}
                          key={item.key}
                          value={item.key}
                        >
                          <FormattedMessage {...item.label} />
                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  </div>
                }
              >
                <GradientButton
                  className="main-btn--icon table__settings-btn"
                  variant="tertiary"
                  addonBefore={<SvgIcon icon="settings" className="icon-right" />}
                />
              </Dropdown>
            }
            dataIndex={LISTING_TABLE_COLUMNS_KEY.SETTINGS}
            key={LISTING_TABLE_COLUMNS_KEY.SETTINGS}
            width={56}
            fixed="right"
          />
        </Table>
      )}
    </section>
  );
};

Listings.Layout = DashboardLayout;

Listings.getInitialProps = getInitialProps;

export default Listings;
