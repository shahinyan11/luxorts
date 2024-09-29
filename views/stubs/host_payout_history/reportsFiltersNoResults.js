import { Tabs, Button, Dropdown, Checkbox } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';

const { TabPane } = Tabs;

const ReportsFiltersNoResults = () => (
  <div className="main-layout">
    <MainHeader isMainMenu />
    <div className="main-layout__content main-layout__content--wide">
      <h1 className="text-display-2 mb-24 mt-32">Reports</h1>
      <Tabs defaultActiveKey="1" className="w-100">
        <TabPane tab="Payment History" key="1">
          <div className="table-head d-flex mb-24">
            <Button
              htmlType="button"
              className="main-btn main-btn--medium main-btn--filter main-btn--filter-active mr-8"
            >
              Jun 16, 2021 - Jul 8, 2021
              <SvgIcon icon="arrow-down" className="icon-right" />
            </Button>
            <Dropdown
              placement="bottomLeft"
              className="table-head__dropdown-payment"
              overlay={
                <div className="table-head__dropdown-content">
                  <p className="d-flex flex-column mb-0 table-head__checkboxes">
                    <Checkbox checked>Credit or debit card</Checkbox>
                    <Checkbox>PayPal</Checkbox>
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
                className="main-btn main-btn--medium main-btn--filter main-btn--filter-active mr-8"
              >
                Payment method
                <span className="main-btn__amount">1</span>
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
            <Dropdown
              placement="bottomLeft"
              className="table-head__dropdown-payment"
              overlay={
                <div className="table-head__dropdown-content">
                  <p className="d-flex flex-column mb-0 table-head__checkboxes">
                    <Checkbox checked>
                      <img
                        alt=""
                        width="68"
                        height="48"
                        src="/images/housing-preview-01.png"
                        className="mr-16"
                      />
                      Charming and comfortable house
                    </Checkbox>
                    <Checkbox>
                      <img
                        alt=""
                        width="68"
                        height="48"
                        src="/images/housing-preview-02.png"
                        className="mr-16"
                      />
                      Luxury Bi-Level in Heart of Center City
                    </Checkbox>
                    <Checkbox>
                      <img
                        alt=""
                        width="68"
                        height="48"
                        src="/images/housing-preview-03.png"
                        className="mr-16"
                      />
                      Beautiful private, bedroom with full bathroom
                    </Checkbox>
                    <Checkbox>
                      <img
                        alt=""
                        width="68"
                        height="48"
                        src="/images/housing-preview-04.png"
                        className="mr-16"
                      />
                      Gorgeous Studio with Parking and Convenient Location
                    </Checkbox>
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
                Listing
                <span className="main-btn__amount">1</span>
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
          </div>
          <div className="mt-32 mt-md-128 text-align-center d-flex align-items-center flex-column">
            <img alt="" src="/images/no-results.png" width="136" height="136" className="mb-24" />
            <p className="text-body mb-32">No results found.</p>
            <Button htmlType="button" className="main-btn main-btn--primary min-width-140">
              Clear all filters
            </Button>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default ReportsFiltersNoResults;
