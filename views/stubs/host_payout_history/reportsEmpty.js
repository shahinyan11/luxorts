import React from 'react';
import { Tabs } from 'antd';
import MainHeader from '../layout/header';

const { TabPane } = Tabs;

const ReportsEmpty = () => (
  <div className="main-layout">
    <MainHeader isMainMenu />
    <div className="main-layout__content main-layout__content--wide">
      <h1 className="text-display-2 mb-24 mt-32">Reports</h1>
      <Tabs defaultActiveKey="1" className="w-100">
        <TabPane tab="Payment History" key="1">
          <div className="mt-20 mt-md-100 text-align-center">
            <img alt="" src="/images/empty.png" width="136" height="136" className="mb-28" />
            <p className="text-body">No payments yet.</p>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default ReportsEmpty;
