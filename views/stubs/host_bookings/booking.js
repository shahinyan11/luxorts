import React from 'react';
import { Button, Input, Form, Table, Tag, Checkbox, Dropdown, Menu } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';

const { Column } = Table;

const dataSource = [
  {
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-01.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Charming and comfortable house</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/cameron.png" className="mr-8" />
        <p className="mb-0 table__column-name">Darrell Steward</p>
      </div>
    ),
    guests: '2',
    location: 'Philadelphia, PA, United States',
    'check-in': 'Mar 16, 2022',
    'check-out': 'Apr 7, 2022',
    total: <p className="mb-0 text-align-right">$1,620.00</p>,
    status: <Tag className="tag tag--warning">Pending</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>View Details</Menu.Item>
            <Menu.Item>Accept Booking</Menu.Item>
            <Menu.Item>Reject Booking</Menu.Item>
          </Menu>
        }
      >
        <Button htmlType="button" className="table__menu-btn main-btn main-btn--icon">
          <SvgIcon icon="three-dots" className="icon-right" />
        </Button>
      </Dropdown>
    ),
  },
  {
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-02.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Luxury Bi-Level in Heart of Center City</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/ronald.png" className="mr-8" />
        <p className="mb-0 table__column-name">Robert Fox</p>
      </div>
    ),
    guests: '2',
    location: 'Philadelphia, PA, United States',
    'check-in': 'Mar 16, 2022',
    'check-out': 'Apr 7, 2022',
    total: <p className="mb-0 text-align-right">$1,620.00</p>,
    status: <Tag className="tag tag--success">Upcoming</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>View Details</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Cancel Booking</Menu.Item>
          </Menu>
        }
      >
        <Button htmlType="button" className="table__menu-btn main-btn main-btn--icon">
          <SvgIcon icon="three-dots" className="icon-right" />
        </Button>
      </Dropdown>
    ),
  },
  {
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-03.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sosuite | Art deco dream in University</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/esther.png" className="mr-8" />
        <p className="mb-0 table__column-name">Cody Fisher</p>
      </div>
    ),
    guests: '2',
    location: 'Philadelphia, PA, United States',
    'check-in': 'Mar 16, 2022',
    'check-out': 'Apr 7, 2022',
    total: <p className="mb-0 text-align-right">$1,620.00</p>,
    status: <Tag className="tag tag--primary">Current</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>View Details</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
          </Menu>
        }
      >
        <Button htmlType="button" className="table__menu-btn main-btn main-btn--icon">
          <SvgIcon icon="three-dots" className="icon-right" />
        </Button>
      </Dropdown>
    ),
  },
  {
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-04.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Pink Modern Apartment</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/jane.png" className="mr-8" />
        <p className="mb-0 table__column-name">Jane Cooper</p>
      </div>
    ),
    guests: '2',
    location: 'Philadelphia, PA, United States',
    'check-in': 'Mar 16, 2022',
    'check-out': 'Apr 7, 2022',
    total: <p className="mb-0 text-align-right">$1,620.00</p>,
    status: <Tag className="tag tag--cancel">Completed</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>View Details</Menu.Item>
            <Menu.Item>Leave A Review</Menu.Item>
          </Menu>
        }
      >
        <Button htmlType="button" className="table__menu-btn main-btn main-btn--icon">
          <SvgIcon icon="three-dots" className="icon-right" />
        </Button>
      </Dropdown>
    ),
  },
  {
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-05.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sweet home with private entrance</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/jenny.png" className="mr-8" />
        <p className="mb-0 table__column-name">Jenny Wilson</p>
      </div>
    ),
    guests: '2',
    location: 'Philadelphia, PA, United States',
    'check-in': 'Mar 16, 2022',
    'check-out': 'Apr 7, 2022',
    total: <p className="mb-0 text-align-right">$1,620.00</p>,
    status: <Tag className="tag tag--draft">Cancelled</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>View Details</Menu.Item>
          </Menu>
        }
      >
        <Button htmlType="button" className="table__menu-btn main-btn main-btn--icon">
          <SvgIcon icon="three-dots" className="icon-right" />
        </Button>
      </Dropdown>
    ),
  },
  {
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-06.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sweet Oasis in Historic Philly</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/floyd.png" className="mr-8" />
        <p className="mb-0 table__column-name">Floyd Miles</p>
      </div>
    ),
    guests: '2',
    location: 'Philadelphia, PA, United States',
    'check-in': 'Mar 16, 2022',
    'check-out': 'Apr 7, 2022',
    total: <p className="mb-0 text-align-right">$1,620.00</p>,
    status: <Tag className="tag tag--error">Rejected</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>View Details</Menu.Item>
          </Menu>
        }
      >
        <Button htmlType="button" className="table__menu-btn main-btn main-btn--icon">
          <SvgIcon icon="three-dots" className="icon-right" />
        </Button>
      </Dropdown>
    ),
  },
];

const Booking = () => (
  <div className="main-layout">
    <MainHeader isMainMenu />
    <div className="main-layout__content main-layout__content--wide">
      <section className="listing">
        <div className="listing__header mb-24">
          <h1 className="listing__title">
            Bookings
            <span className="listing__counter"> 6</span>
          </h1>
        </div>
        <div className="table-head d-flex mb-24">
          <Form layout="inline" size="middle">
            <Form.Item>
              <Input.Search
                allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                className="max-width-364"
                enterButton={<SvgIcon icon="search" />}
                placeholder="Search booking"
              />
            </Form.Item>
            <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
              Check in - Check out
              <SvgIcon icon="arrow-down" className="icon-right" />
            </Button>
            <Dropdown
              placement="bottomLeft"
              overlay={
                <div className="table-head__dropdown-content min-width-360">
                  <div className="table-head__checkboxes d-flex flex-column">
                    <Checkbox>Philadelphia, PA, United States</Checkbox>
                    <Checkbox checked>Los Angeles, CA, United States</Checkbox>
                    <Checkbox checked>Chicago, IL, United States</Checkbox>
                    <Checkbox>Seattle, WA, United States</Checkbox>
                    <Checkbox>Phoenix, AZ, United States</Checkbox>
                  </div>
                  <div className="table-head__actions pt-24 pb-24 d-flex justify-content-flex-end">
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--tertiary mr-16"
                    >
                      Clear
                    </Button>
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--primary min-width-120"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              }
            >
              <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
                Location
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
            <Dropdown
              placement="bottomLeft"
              overlay={
                <div className="table-head__dropdown-content">
                  <div className="table-head__checkboxes d-flex flex-column">
                    <Checkbox checked>Pending</Checkbox>
                    <Checkbox checked>Upcoming</Checkbox>
                    <Checkbox>Current</Checkbox>
                    <Checkbox>Completed</Checkbox>
                    <Checkbox>Cancelled</Checkbox>
                    <Checkbox>Rejected</Checkbox>
                  </div>
                  <div className="table-head__actions pt-24 pb-24 d-flex justify-content-flex-end">
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--tertiary mr-16"
                    >
                      Clear
                    </Button>
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--primary min-width-120"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              }
            >
              <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
                Status
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
          </Form>
        </div>
        <Table
          showSorterTooltip={false}
          tableLayout="auto"
          scroll={{ x: 1804 }}
          position="center"
          dataSource={dataSource}
          className="table table--listings table--bookings"
          pagination={{
            position: ['bottomLeft'],
            showSizeChanger: false,
            pageSize: 8,
            hideOnSinglePage: true,
          }}
        >
          <Column
            title="Listing"
            dataIndex="listing"
            key="listing"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            fixed="left"
            width={364}
          />
          <Column
            title="Hidden Title"
            dataIndex="hidden-title"
            key="hidden-title"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={280}
          />
          <Column
            title="Guest"
            dataIndex="guest"
            key="guest"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={240}
          />
          <Column
            title="Guests"
            dataIndex="guests"
            key="guests"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={100}
          />
          <Column
            title="Location"
            dataIndex="location"
            key="location"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={240}
          />
          <Column
            title="Check In"
            dataIndex="check-in"
            key="check-in"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={138}
          />
          <Column
            title="Check Out"
            dataIndex="check-out"
            key="check-out"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={138}
          />
          <Column
            title="Total"
            dataIndex="total"
            key="total"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={138}
          />
          <Column
            title="Status"
            dataIndex="status"
            key="status"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={110}
          />
          <Column
            title={
              <Dropdown
                placement="bottomRight"
                className="table__settings"
                overlay={
                  <div className="table__settings-content">
                    <h4 className="table__settings-title mb-16">Columns settings</h4>
                    <p className="d-flex flex-column mb-0 table__settings-checkboxes">
                      <Checkbox checked>Hidden Title</Checkbox>
                      <Checkbox checked>Guest</Checkbox>
                      <Checkbox checked>Guests</Checkbox>
                      <Checkbox checked>Total</Checkbox>
                    </p>
                  </div>
                }
              >
                <Button
                  htmlType="button"
                  className="main-btn main-btn--tertiary main-btn--icon table__settings-btn"
                >
                  <SvgIcon icon="settings" className="icon-right" />
                </Button>
              </Dropdown>
            }
            dataIndex="settings"
            key="settings"
            width={56}
            fixed="right"
          />
        </Table>
      </section>
    </div>
  </div>
);

export default Booking;
