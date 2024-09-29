import React from 'react';
import { Button, Input, Form, Table, Tag, Checkbox, Dropdown, Menu } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../../layout/header';

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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--cancel">Unpublished</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Publish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
            <Menu.Item>Remove</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--warning">On Moderation</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
          src="/images/housing-preview-07.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Beautiful private, bedroom with full...</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--draft">Draft</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Publish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
            <Menu.Item>Remove</Menu.Item>
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
          src="/images/housing-preview-08.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Gorgeous Studio with Parking and Central</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--error">Blocked</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Republish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
            <Menu.Item>Remove</Menu.Item>
            <Menu.Item>Contact Support</Menu.Item>
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
          src="/images/housing-preview-01.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Charming and comfortable house</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--cancel">Unpublished</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Publish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
            <Menu.Item>Remove</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--warning">On Moderation</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
          src="/images/housing-preview-07.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Beautiful private, bedroom with full...</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--draft">Draft</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Publish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
            <Menu.Item>Remove</Menu.Item>
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
          src="/images/housing-preview-08.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Gorgeous Studio with Parking and Central</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--error">Blocked</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Republish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
            <Menu.Item>Remove</Menu.Item>
            <Menu.Item>Contact Support</Menu.Item>
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
          src="/images/housing-preview-01.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Charming and comfortable house</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--success">Published</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--cancel">Unpublished</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Publish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
            <Menu.Item>Remove</Menu.Item>
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
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--warning">On Moderation</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Unpublish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
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
          src="/images/housing-preview-07.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Beautiful private, bedroom with full...</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--draft">Draft</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Publish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
            <Menu.Item>Remove</Menu.Item>
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
          src="/images/housing-preview-08.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Gorgeous Studio with Parking and Central</p>
      </div>
    ),
    'hidden-title': '1529 Walnut St',
    guests: '2',
    bedrooms: '2',
    beds: '3',
    baths: '1',
    location: 'Philadelphia, PA, United States',
    'date-created': 'Jan 10, 2022',
    'last-updated': 'Jan 16, 2022',
    status: <Tag className="tag tag--error">Blocked</Tag>,
    settings: (
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu className="table__settings-menu width-180">
            <Menu.Item>Republish</Menu.Item>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>View Calendar</Menu.Item>
            <Menu.Item>Preview</Menu.Item>
            <Menu.Item>Remove</Menu.Item>
            <Menu.Item>Contact Support</Menu.Item>
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

const ListingsFullTable = () => (
  <div className="main-layout">
    <MainHeader isMainMenu />
    <div className="main-layout__content main-layout__content--wide">
      <section className="listing">
        <div className="listing__header mb-24">
          <h1 className="listing__title">
            Your listings
            <span className="listing__counter"> 24</span>
          </h1>
          <Button htmlType="button" className="main-btn main-btn--primary min-width-140">
            Add new listing
          </Button>
        </div>
        <div className="table-head d-flex mb-24">
          <Form layout="inline" size="middle">
            <Form.Item>
              <Input.Search
                allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                className="max-width-364"
                enterButton={<SvgIcon icon="search" />}
                placeholder="Search listing"
              />
            </Form.Item>
            <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
              Accommodation
              <SvgIcon icon="arrow-down" className="icon-right" />
            </Button>
            <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
              Amenities
              <SvgIcon icon="arrow-down" className="icon-right" />
            </Button>
            <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
              Status
              <SvgIcon icon="arrow-down" className="icon-right" />
            </Button>
          </Form>
        </div>
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
            title="Guests"
            dataIndex="guests"
            key="guests"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={100}
          />
          <Column
            title="Bedrooms"
            dataIndex="bedrooms"
            key="bedrooms"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={120}
          />
          <Column
            title="Beds"
            dataIndex="beds"
            key="beds"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={89}
          />
          <Column
            title="Baths"
            dataIndex="baths"
            key="baths"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={94}
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
            title="Date Created"
            dataIndex="date-created"
            key="date-created"
            sorter={(a, b) => a.age - b.age}
            sortDirections={['descend']}
            width={137}
          />
          <Column
            title="Last Updated"
            dataIndex="last-updated"
            key="last-updated"
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
            width={134}
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
                      <Checkbox checked>Guests</Checkbox>
                      <Checkbox>Bedrooms</Checkbox>
                      <Checkbox checked>Beds</Checkbox>
                      <Checkbox>Baths</Checkbox>
                      <Checkbox checked>Date Created</Checkbox>
                      <Checkbox>Last Updated</Checkbox>
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

export default ListingsFullTable;
