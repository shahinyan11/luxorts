import { Button, Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types';

import SvgIcon from 'views/shared/SvgIcon';

import useContainer from './hook';

const Settings = ({ id, status, stepStatus }) => {
  const { visible, actions, onVisibilityChangeHandler } = useContainer({ id, status, stepStatus });

  return (
    <Dropdown
      trigger="click"
      visible={visible}
      onVisibleChange={onVisibilityChangeHandler}
      placement="bottomRight"
      overlay={<Menu className="table__settings-menu width-180" items={actions} />}
    >
      <Button htmlType="button" className="table__menu-btn main-btn main-btn--icon">
        <SvgIcon icon="three-dots" className="icon-right" />
      </Button>
    </Dropdown>
  );
};

Settings.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  stepStatus: PropTypes.string.isRequired,
};

export default Settings;
