import React, { useState } from 'react';
import { Button } from 'antd';
import RemovePhoto from '../shared/RemovePhoto';

const RemoveProfileImage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button htmlType="button" className="main-btn main-btn--primary" onClick={setModalVisible}>
        Remove photo
      </Button>
      <RemovePhoto visible={modalVisible} />
    </>
  );
};

export default RemoveProfileImage;
