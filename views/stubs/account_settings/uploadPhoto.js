import React, { useState } from 'react';
import { Button } from 'antd';
import UploadProfileImage from '../shared/UploadProfileImage';

const UploadPhoto = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button htmlType="button" className="main-btn main-btn--primary" onClick={setModalVisible}>
        Upload profile image
      </Button>
      <UploadProfileImage visible={modalVisible} />
    </>
  );
};

export default UploadPhoto;
