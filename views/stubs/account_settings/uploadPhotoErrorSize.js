import React, { useState } from 'react';
import { Button } from 'antd';
import UploadProfileImage from '../shared/UploadProfileImage';

const UploadPhotoErrorSize = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button htmlType="button" className="main-btn main-btn--primary" onClick={setModalVisible}>
        Upload profile image
      </Button>
      <UploadProfileImage
        visible={modalVisible}
        isError
        messageText="Please use JPG or PNG image smaller than 10MB"
      />
    </>
  );
};

export default UploadPhotoErrorSize;
