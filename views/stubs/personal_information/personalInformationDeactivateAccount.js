import { Modal, Input, Button, Form } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const PersonalInformationDeactivateAccount = () => (
  <Modal
    title="Deactivate account"
    visible
    closable
    className="modal"
    width={558}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="d-flex justify-content-flex-end w-100">
        <Button htmlType="button" className="main-btn main-btn--medium main-btn--tertiary mr-16">
          Cancel
        </Button>
        <Button
          htmlType="submit"
          className="main-btn main-btn--medium main-btn--warning min-width-120"
        >
          Deactivate
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      <div className="d-flex flex-column">
        <p className="text-body mb-16">
          Are you sure you want to deactivate your account? You can restore your account anytime.
        </p>
        <p className="text-body mb-24">
          Enter your password to confirm you want to deactivate your account.
        </p>
        <Form layout="vertical" size="large">
          <div className="d-flex justify-content-space-between">
            <label className="input-text__label" htmlFor="password">
              Password
            </label>
            <a href="#" className="main-text-btn fz-12">
              Forgot password?
            </a>
          </div>
          <Form.Item htmlFor="input-password" className="mb-4">
            <Input.Password
              placeholder="Placeholder"
              id="input-password"
              iconRender={
                // eslint-disable-next-line react/no-unstable-nested-components
                (visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)
              }
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  </Modal>
);

export default PersonalInformationDeactivateAccount;
