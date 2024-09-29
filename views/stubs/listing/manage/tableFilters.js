import React from 'react';
import { Button, Input, Form, Dropdown, Checkbox, InputNumber } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../../layout/header';

const TableFilters = () => (
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
                value="Qwerty"
                placeholder="Search listing"
              />
            </Form.Item>
            <Dropdown
              placement="bottomLeft"
              className="table-head__dropdown-payment"
              overlay={
                <div className="table-head__dropdown-content">
                  <p className="d-flex flex-column mb-0 table-head__content">
                    <Form layout="vertical" size="large" className="pl-24 pr-24 pt-24 pb-24">
                      <Form.Item className="mb-8 width-312 ant-form-item--light">
                        <InputNumber
                          min={0}
                          defaultValue={0}
                          addonBefore="Guests"
                          controls={{
                            upIcon: <SvgIcon icon="plus-circle" />,
                            downIcon: <SvgIcon icon="minus-circle" />,
                          }}
                        />
                      </Form.Item>
                      <Form.Item className="mb-8 width-312 ant-form-item--light">
                        <InputNumber
                          min={0}
                          defaultValue={0}
                          addonBefore="Bedrooms"
                          controls={{
                            upIcon: <SvgIcon icon="plus-circle" />,
                            downIcon: <SvgIcon icon="minus-circle" />,
                          }}
                        />
                      </Form.Item>
                      <Form.Item className="mb-8 width-312 ant-form-item--light">
                        <InputNumber
                          min={0}
                          defaultValue={0}
                          addonBefore="Beds"
                          controls={{
                            upIcon: <SvgIcon icon="plus-circle" />,
                            downIcon: <SvgIcon icon="minus-circle" />,
                          }}
                        />
                      </Form.Item>
                      <Form.Item className="mb-0 width-312 ant-form-item--light">
                        <InputNumber
                          min={0}
                          defaultValue={0}
                          addonBefore="Baths"
                          controls={{
                            upIcon: <SvgIcon icon="plus-circle" />,
                            downIcon: <SvgIcon icon="minus-circle" />,
                          }}
                        />
                      </Form.Item>
                    </Form>
                  </p>
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
              <Button
                htmlType="button"
                className="main-btn main-btn--medium main-btn--filter main-btn--filter-active"
              >
                Accommodation
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
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
        <div className="table-head d-flex mb-24">
          <Form layout="inline" size="middle">
            <Form.Item>
              <Input.Search
                allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                className="max-width-364"
                enterButton={<SvgIcon icon="search" />}
                value="Qwerty"
                placeholder="Search listing"
              />
            </Form.Item>
            <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
              Accommodation
              <SvgIcon icon="arrow-down" className="icon-right" />
            </Button>
            <Dropdown
              placement="bottomLeft"
              className="table-head__dropdown-payment"
              overlay={
                <div className="table-head__dropdown-content">
                  <div className="table-head__search">
                    <Form size="middle">
                      <Form.Item className="mb-0">
                        <Input.Search
                          allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                          className="width-328"
                          enterButton={<SvgIcon icon="search" />}
                          placeholder="Search amenity"
                        />
                      </Form.Item>
                    </Form>
                  </div>
                  <p className="d-flex flex-column mb-0 table-head__checkboxes">
                    <Checkbox checked>Wifi</Checkbox>
                    <Checkbox>Kitchen</Checkbox>
                    <Checkbox>Self check-in</Checkbox>
                    <Checkbox>Pool</Checkbox>
                    <Checkbox>Hot tub</Checkbox>
                    <Checkbox>Kitchen</Checkbox>
                    <Checkbox>Self check-in</Checkbox>
                    <Checkbox>Pool</Checkbox>
                  </p>
                  <div className="table-head__actions pt-24 pb-24 d-flex justify-content-flex-end">
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
              <Button
                htmlType="button"
                className="main-btn main-btn--medium main-btn--filter main-btn--filter-active"
              >
                Amenities
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
            <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
              Status
              <SvgIcon icon="arrow-down" className="icon-right" />
            </Button>
          </Form>
        </div>
        <div className="table-head d-flex mb-24">
          <Form layout="inline" size="middle">
            <Form.Item>
              <Input.Search
                allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                className="max-width-364"
                enterButton={<SvgIcon icon="search" />}
                value="Qwerty"
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
            <Dropdown
              placement="bottomLeft"
              className="table-head__dropdown-payment"
              overlay={
                <div className="table-head__dropdown-content">
                  <p className="d-flex flex-column mb-0 table-head__checkboxes">
                    <Checkbox checked>Published</Checkbox>
                    <Checkbox>Unpublished</Checkbox>
                    <Checkbox>On Moderation</Checkbox>
                    <Checkbox>Draft</Checkbox>
                    <Checkbox>Blocked</Checkbox>
                  </p>
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
              <Button
                htmlType="button"
                className="main-btn main-btn--medium main-btn--filter main-btn--filter-active"
              >
                Status
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
          </Form>
        </div>
      </section>
    </div>
  </div>
);

export default TableFilters;
