import React from 'react';
import { Button, Input, Form } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../../layout/header';

const SearchNoResults = () => (
  <div className="main-layout">
    <MainHeader isMainMenu />
    <div className="main-layout__content main-layout__content--wide">
      <section className="listing">
        <div className="listing__header mb-24">
          <h1 className="listing__title">
            Your listings
            <span className="listing__counter"> 0</span>
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
        <div className="listing__empty pt-64 pt-md-128 pb-64 pb-md-128">
          <img alt="" src="/images/no-results.png" width="136" height="136" className="mb-24" />
          <p className="listing__text mb-32">No results found.</p>
        </div>
      </section>
    </div>
  </div>
);

export default SearchNoResults;
