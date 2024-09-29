import React, { useState } from 'react';
import { Button } from 'antd';
import UploadProfileImage from '../shared/UploadProfileImage';

const UploadPhotoRequired = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button htmlType="button" className="main-btn main-btn--primary" onClick={setModalVisible}>
        Upload profile image
      </Button>
      <UploadProfileImage visible={modalVisible} isError messageText="Please upload the image" />
    </>
  );
};

export default UploadPhotoRequired;
