import React, { useState } from 'react';
import {
  Menu,
  Dropdown,
  Input,
  DatePicker,
  TimePicker,
  Avatar,
  Select,
  Tabs,
  Tag,
  Button,
  Form,
  Progress,
  Radio,
  InputNumber,
  Checkbox,
  Switch,
  Tooltip,
  Slider,
} from 'antd';
import { DownOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import PhoneInput from 'react-phone-number-input';
import useContainer from 'views/Users/hook';
import Header from 'views/shared/headers/Header';

const { RangePicker } = DatePicker;
const { Option } = Select;
const { TabPane } = Tabs;
const dateFormat = 'MM/DD/YYYY';

const Users = () => {
  useContainer();
  const [value, setValue] = useState();

  const onChange = (e) => {
    /* istanbul ignore next */
    setValue(e.target.value);
  };

  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__content">
        <h1 className="text-mega">lorem ipsumlorem ipsum</h1>
        <h1 className="text-mega-2">lorem ipsumlorem ipsum</h1>
        <h2 className="text-jumbo">lorem ipsumlorem ipsum lorem</h2>
        <h2 className="text-jumbo-2">lorem ipsumlorem ipsum lorem</h2>
        <h2 className="text-display">lorem ipsumlorem ipsum lorem ipsum lorem</h2>
        <h2 className="text-display-2">lorem ipsumlorem ipsum lorem ipsum lorem</h2>
        <h3 className="text-headline">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</h3>
        <h3 className="text-headline-2">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</h3>
        <h3 className="text-title">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</h3>
        <h3 className="text-title-2">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</h3>
        <h4 className="text-subheader-big">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</h4>
        <h4 className="text-subheader-big-2">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</h4>
        <h4 className="text-subheader">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</h4>
        <h4 className="text-subheader-2">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</h4>
        <p className="text-body">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        <p className="text-body-strikethrough">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        <p className="text-body-underline">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        <p className="text-body-2">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        <p className="text-caption">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        <p className="text-caption-strikethrough">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        <p className="text-caption-underline">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        <p className="text-caption-2">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        <p className="text-small">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        <p className="text-small-2">lorem ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        <Button htmlType="button" className="main-btn main-btn--primary mb-8">
          Button
        </Button>
        <Button htmlType="button" className="main-btn main-btn--primary mb-8">
          Button
          <SvgIcon icon="plus" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--primary mb-8">
          <SvgIcon icon="alert" className="icon-left" />
          Button
        </Button>
        <Button htmlType="button" className="main-btn main-btn--primary mb-8">
          <SvgIcon icon="alert" className="icon-left" />
          Button
          <SvgIcon icon="plus" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--primary main-btn--icon mb-8">
          <SvgIcon icon="alert" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--primary mb-8" loading>
          Button
        </Button>
        <Button htmlType="button" className="main-btn main-btn--primary mb-8" loading>
          Button
          <SvgIcon icon="plus" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--primary mb-8" loading>
          <SvgIcon icon="alert" className="icon-left" />
          Button
        </Button>
        <Button htmlType="button" className="main-btn main-btn--primary mb-8" loading>
          <SvgIcon icon="alert" className="icon-left" />
          Button
          <SvgIcon icon="plus" className="icon-right" />
        </Button>
        <Button
          htmlType="button"
          className="main-btn main-btn--primary main-btn--icon mb-8"
          loading
        >
          <SvgIcon icon="alert" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--secondary mb-8">
          Button
        </Button>
        <Button htmlType="button" className="main-btn main-btn--secondary mb-8">
          Button
          <SvgIcon icon="cross" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--secondary mb-8">
          <SvgIcon icon="alert" className="icon-left" />
          Button
        </Button>
        <Button htmlType="button" className="main-btn main-btn--secondary mb-8">
          <SvgIcon icon="alert" className="icon-left" />
          Button
          <SvgIcon icon="plus" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--secondary main-btn--icon mb-8">
          <SvgIcon icon="alert" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--tertiary mb-8">
          Button
        </Button>
        <Button htmlType="button" className="main-btn main-btn--tertiary mb-8">
          Button
          <SvgIcon icon="cross" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--tertiary mb-8">
          <SvgIcon icon="alert" className="icon-left" />
          Button
        </Button>
        <Button htmlType="button" className="main-btn main-btn--tertiary mb-8">
          <SvgIcon icon="alert" className="icon-left" />
          Button
          <SvgIcon icon="plus" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon mb-8">
          <SvgIcon icon="alert" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--warning mb-8">
          Button
        </Button>
        <Button htmlType="button" className="main-btn main-btn--warning mb-8">
          Button
          <SvgIcon icon="cross" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--warning mb-8">
          <SvgIcon icon="alert" className="icon-left" />
          Button
        </Button>
        <Button htmlType="button" className="main-btn main-btn--warning mb-8">
          <SvgIcon icon="alert" className="icon-left" />
          Button
          <SvgIcon icon="plus" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-btn main-btn--warning main-btn--icon mb-8">
          <SvgIcon icon="alert" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-text-btn">
          Button
        </Button>
        <Button htmlType="button" className="main-text-btn">
          Button
          <SvgIcon icon="edit" className="icon-right" />
        </Button>
        <Button htmlType="button" className="main-text-btn main-text-btn--secondary">
          Button
        </Button>
        <Button htmlType="button" className="main-text-btn main-text-btn--secondary">
          Button
          <SvgIcon icon="edit" className="icon-right" />
        </Button>
        <a href="#" className="main-text-btn">
          Link
        </a>
        <a href="#" className="main-text-btn">
          Link
          <SvgIcon icon="edit" className="icon-right" />
        </a>
        <a href="#" className="main-text-btn main-text-btn--secondary">
          Link
        </a>
        <a href="#" className="main-text-btn main-text-btn--secondary">
          Link
          <SvgIcon icon="edit" className="icon-right" />
        </a>
        <a href="#" className="main-link mb-8">
          Main link
        </a>
        <a href="#" className="main-link main-link--secondary mb-8">
          Secondary link
        </a>
        <Form layout="vertical" size="large">
          <Form.Item label="Input large label" htmlFor="input-large">
            <Input placeholder="Placeholder" id="input-large" />
          </Form.Item>
        </Form>
        <Form layout="vertical" size="middle">
          <Form.Item label="Input middle label" htmlFor="input-middle">
            <Input placeholder="Placeholder" id="input-middle" />
          </Form.Item>
        </Form>
        <Form layout="vertical" size="small">
          <Form.Item label="Input small label" htmlFor="input-small">
            <Input placeholder="Placeholder" id="input-small" />
          </Form.Item>
        </Form>
        <Form layout="vertical" size="large">
          <Form.Item label="Phone Number" htmlFor="input-phone">
            <PhoneInput
              international
              defaultCountry="US"
              value={value}
              onChange={setValue}
              id="input-phone"
              className="main-phone-input"
            />
          </Form.Item>
          <Form.Item label="Password" htmlFor="input-password">
            <Input.Password
              placeholder="Placeholder"
              id="input-password"
              iconRender={
                /* istanbul ignore next */
                // eslint-disable-next-line react/no-unstable-nested-components
                (visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)
              }
            />
          </Form.Item>
          <Form.Item label="Date Of Birth" htmlFor="date-birth">
            <DatePicker
              placeholder="DD/MM/YYYY"
              className="w-100"
              size="large"
              id="date-birth"
              format={dateFormat}
            />
          </Form.Item>
          <Form.Item label="Select date range" htmlFor="select-range">
            <RangePicker className="w-100" size="large" id="select-range" format={dateFormat} />
          </Form.Item>
          <Form.Item label="Select date range with footer" htmlFor="select-range-with-range">
            <RangePicker
              className="w-100"
              size="large"
              id="select-range-with-range"
              renderExtraFooter={
                /* istanbul ignore next */
                () => 'extra footer'
              }
              format={dateFormat}
            />
          </Form.Item>
          <Form.Item label="Select month" htmlFor="month">
            <DatePicker picker="month" className="w-100" size="large" id="month" />
          </Form.Item>
          <Form.Item label="Select time" htmlFor="time">
            <TimePicker className="w-100" size="large" id="time" />
          </Form.Item>
          <Form.Item htmlFor="message" label="Message" className="mb-32">
            <Input.TextArea placeholder="How we can help?" id="message" />
          </Form.Item>
        </Form>
        <Select
          showSearch
          placeholder="Select gender"
          className="w-100 mb-16"
          suffixIcon={<SvgIcon icon="arrow-down" />}
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
        <Select
          showSearch
          placeholder="Month"
          className="width-170 mb-16"
          value="March"
          suffixIcon={<SvgIcon icon="arrow-down" />}
        >
          <Option value="january">January</Option>
          <Option value="february">February</Option>
          <Option value="march">March</Option>
          <Option value="april">April</Option>
          <Option value="may">May</Option>
          <Option value="june">June</Option>
          <Option value="july">July</Option>
          <Option value="august">August</Option>
          <Option value="september">September</Option>
          <Option value="october">October</Option>
          <Option value="november">November</Option>
          <Option value="december">December</Option>
        </Select>
        <Form.Item label="Email">
          <Select
            mode="tags"
            className="w-100"
            placeholder="Enter email"
            defaultValue={[
              'tim.jennings@gmail.com',
              'debra.holt@gmail.com',
              'dolores.chambers@gmail.com',
            ]}
          />
        </Form.Item>
        <SvgIcon icon="alert" />
        <SvgIcon icon="activate" />
        <div className="flash-message flash-message--info-primary">
          <SvgIcon icon="alert" className="flash-message__left-icon" />
          <span>Info message</span>
          <Button htmlType="button" className="flash-message__right-icon">
            <SvgIcon icon="cross" />
          </Button>
        </div>
        <div className="flash-message flash-message--info-secondary">
          <SvgIcon icon="alert" className="flash-message__left-icon" />
          <span>Info message</span>
          <Button htmlType="button" className="flash-message__right-icon">
            <SvgIcon icon="cross" />
          </Button>
        </div>
        <div className="flash-message flash-message--success">
          <SvgIcon icon="checked" className="flash-message__left-icon" />
          <span>Info message</span>
        </div>
        <div className="flash-message flash-message--warning">
          <SvgIcon icon="alert" className="flash-message__left-icon" />
          <span>Info message</span>
          <Button htmlType="button" className="flash-message__right-icon">
            <SvgIcon icon="cross" />
          </Button>
        </div>
        <div className="flash-message flash-message--error">
          <SvgIcon icon="alert" className="flash-message__left-icon" />
          <span>Info message</span>
          <Button htmlType="button" className="flash-message__right-icon">
            <SvgIcon icon="cross" />
          </Button>
        </div>
        <div className="flash-message flash-message--custom">
          <SvgIcon icon="notification" className="flash-message__left-icon" />
          <span>Info message</span>
          <Button htmlType="button" className="flash-message__right-icon">
            <SvgIcon icon="cross" />
          </Button>
        </div>
        <p className="subline-message">
          <SvgIcon icon="alert" />
          Info message
        </p>
        <p className="subline-message subline-message--success">
          <SvgIcon icon="checked" />
          Info message
        </p>
        <p className="subline-message subline-message--alert">
          <SvgIcon icon="alert" />
          Info message
        </p>
        <p className="subline-message subline-message--error">
          <SvgIcon icon="alert" />
          Info message
        </p>
        <div className="password-progress">
          <div className="password-progress__line" />
          <p className="subline-message">
            <SvgIcon icon="alert" />
            Info message
          </p>
        </div>
        <div className="password-progress">
          <div className="password-progress__line password-progress__line--success" />
          <p className="subline-message subline-message--success">
            <SvgIcon icon="checked" />
            Info message
          </p>
        </div>
        <div className="password-progress">
          <div className="password-progress__line password-progress__line--alert" />
          <p className="subline-message subline-message--alert">
            <SvgIcon icon="alert" />
            Info message
          </p>
        </div>
        <div className="password-progress">
          <div className="password-progress__line password-progress__line--error" />
          <p className="subline-message subline-message--error">
            <SvgIcon icon="alert" />
            Info message
          </p>
        </div>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                  1st menu item
                </a>
              </Menu.Item>
              <Menu.Item key="2" icon={<DownOutlined />} disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                  2nd menu item (disabled)
                </a>
              </Menu.Item>
              <Menu.Item key="3" disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                  3rd menu item (disabled)
                </a>
              </Menu.Item>
              <Menu.Item key="4" danger>
                a danger item
              </Menu.Item>
            </Menu>
          }
        >
          <a
            className="ant-dropdown-link"
            onClick={
              /* istanbul ignore next */
              (e) => e.preventDefault()
            }
            role="button"
          >
            Hover me <DownOutlined />
          </a>
        </Dropdown>
        <Avatar className="ant-avatar--xxs mb-8">RH</Avatar>
        <Avatar className="ant-avatar--xs mb-8">RH</Avatar>
        <Avatar className="ant-avatar--sm mb-8">RH</Avatar>
        <Avatar className="ant-avatar--md mb-8">RH</Avatar>
        <Avatar className="ant-avatar--lg mb-8">RH</Avatar>
        <Avatar className="ant-avatar--xl mb-8">RH</Avatar>
        <Avatar className="ant-avatar--xxl mb-8">RH</Avatar>
        <Avatar className="ant-avatar--xxxl mb-8">RH</Avatar>
        <Avatar className="ant-avatar--xxs mb-8" src="/images/avatar.png" />
        <Avatar className="ant-avatar--xs mb-8" src="/images/avatar.png" />
        <Avatar className="ant-avatar--sm mb-8" src="/images/avatar.png" />
        <Avatar className="ant-avatar--md mb-8" src="/images/avatar.png" />
        <Avatar className="ant-avatar--lg mb-8" src="/images/avatar.png" />
        <Avatar className="ant-avatar--xl mb-8" src="/images/avatar.png" />
        <Avatar className="ant-avatar--xxl mb-8" src="/images/avatar.png" />
        <Avatar className="ant-avatar--xxxl mb-8" src="/images/avatar.png" />
        <Avatar className="ant-avatar--xxs mb-8" src="/images/avatar-default.png" />
        <Avatar className="ant-avatar--xs mb-8" src="/images/avatar-default.png" />
        <Avatar className="ant-avatar--sm mb-8" src="/images/avatar-default.png" />
        <Avatar className="ant-avatar--md mb-8" src="/images/avatar-default.png" />
        <Avatar className="ant-avatar--lg mb-8" src="/images/avatar-default.png" />
        <Avatar className="ant-avatar--xl mb-8" src="/images/avatar-default.png" />
        <Avatar className="ant-avatar--xxl mb-8" src="/images/avatar-default.png" />
        <Avatar className="ant-avatar--xxxl mb-16" src="/images/avatar-default.png" />
        <Tabs defaultActiveKey="1" className="mb-16">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <Tag className="tag tag--primary mb-8">Basic Chip</Tag>
        <Tag closable className="tag tag--primary mb-8">
          Tag 2
        </Tag>
        <Tag className="tag tag--primary mb-8">
          <SvgIcon icon="plus" className="tag__icon mr-4" />
          New Tag
        </Tag>
        <Tag className="tag tag--primary mb-8">
          <SvgIcon icon="file" className="tag__icon mr-4" />
          Basic Chip
        </Tag>
        <Tag className="tag tag--border-solid mb-8">Basic Chip</Tag>
        <Tag closable className="tag tag--border-solid mb-8">
          Tag 2
        </Tag>
        <Tag className="tag tag--border-solid mb-8">
          <SvgIcon icon="plus" className="tag__icon mr-4" />
          New Tag
        </Tag>
        <Tag className="tag tag--border-solid mb-8">
          <SvgIcon icon="file" className="tag__icon mr-4" />
          Basic Chip
        </Tag>
        <Tag className="tag tag--add mb-8">
          <SvgIcon icon="plus" className="tag__icon mr-4" />
          Add Tag
        </Tag>
        <Tag className="tag tag--primary tag--large mb-8">Basic Chip</Tag>
        <Tag closable className="tag tag--primary tag--large mb-8">
          Tag 2
        </Tag>
        <Tag className="tag tag--primary tag--large mb-8">
          <SvgIcon icon="plus" className="tag__icon mr-4" />
          New Tag
        </Tag>
        <Tag className="tag tag--primary tag--large mb-24">
          <SvgIcon icon="file" className="tag__icon mr-4" />
          Basic Chip
        </Tag>
        <Progress percent={50} showInfo={false} className="mb-24" />
        <Checkbox checked className="mb-8">
          Credit or debit card
        </Checkbox>
        <Checkbox className="mb-24">PayPal</Checkbox>
        <Radio.Group onChange={onChange} value={value} className="mb-24 d-flex flex-column">
          <Radio value="entire" checked disabled>
            Entire place
          </Radio>
          <Radio value="private">Private room</Radio>
          <Radio value="shared">Shared room</Radio>
        </Radio.Group>
        <Form layout="vertical" size="large">
          <Form.Item label="How many beds can your guests use?" htmlFor="beds">
            <InputNumber
              addonBefore="Beds"
              min={0}
              defaultValue={0}
              id="beds"
              controls={{
                upIcon: <SvgIcon icon="plus-circle" />,
                downIcon: <SvgIcon icon="minus-circle" />,
              }}
            />
          </Form.Item>
          <div className="d-flex">
            <Form.Item className="mb-16 ant-form-item--edit-number width-364">
              <Input placeholder="Enter bath title" />
              <InputNumber
                min={0}
                defaultValue={0}
                controls={{
                  upIcon: <SvgIcon icon="plus-circle" />,
                  downIcon: <SvgIcon icon="minus-circle" />,
                }}
              />
            </Form.Item>
            <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon ml-8">
              <SvgIcon icon="cross" className="icon-right" />
            </Button>
          </div>
        </Form>
        <Switch className="mb-24" />
        <Switch defaultChecked className="mb-24" />
        <div className="switch mb-24">
          <Switch className="switch__button" />
          <span className="switch__label">Suitable for children (2-12 years)</span>
          <Tooltip title="Tooltip content" placement="topLeft" className="ml-4">
            <span className="tooltip">
              <SvgIcon icon="info" className="icon" />
            </span>
          </Tooltip>
        </div>
        <div className="switch mb-24">
          <Switch defaultChecked className="switch__button" />
          <span className="switch__label">Suitable for children (2-12 years)</span>
          <Tooltip title="Tooltip content" placement="topLeft" className="ml-4">
            <span className="tooltip">
              <SvgIcon icon="info" className="icon" />
            </span>
          </Tooltip>
        </div>
        <Slider range defaultValue={[20, 50]} className="mb-24 mt-24" />
      </div>
    </div>
  );
};

export default Users;
