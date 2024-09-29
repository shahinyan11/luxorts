import React from 'react';
import { Progress, Button, Upload } from 'antd';
import SvgIcon from '../../shared/SvgIcon';
import MainHeader from '../../layout/header';

const photosProps = {
  defaultFileList: [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-01.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-02.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-03.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-04.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-05.png',
    },
    {
      uid: '-6',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-06.png',
    },
    {
      uid: '-7',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-07.png',
    },
    {
      uid: '-8',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-08.png',
    },
  ],

  showUploadList: {
    showPreviewIcon: true,
    previewIcon: <SvgIcon icon="edit" className="icon-left" />,
    showRemoveIcon: true,
    removeIcon: <SvgIcon icon="cross" className="icon-left" />,
  },
};

const PhotosUpload = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="Photos" />
    <div className="main-layout__content main-layout__content--full-width">
      <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
      <section className="new-listing pt-32">
        <div className="new-listing__container new-listing__container--wide mb-8">
          <h1 className="new-listing__title mb-8">Upload listing photos</h1>
          <p className="new-listing__description mb-32">
            Image format: JPG or PNG. Photo quality: Min. 1024 x 683, Max. 3840 x 2160.
          </p>
          <Upload
            listType="picture-card"
            {...photosProps}
            className="new-listing__upload ant-upload ant-upload--light"
          >
            <Button
              htmlType="button"
              className="main-btn main-btn--primary min-width-216 ml-auto mr-auto mt-16"
            >
              <SvgIcon icon="upload" className="icon-left" />
              Upload photos
            </Button>
          </Upload>
        </div>
        <div className="new-listing__footer pt-24 pb-24">
          <div className="new-listing__container d-flex justify-content-space-between">
            <Button htmlType="button" className="main-btn main-btn--tertiary min-width-140">
              Back
            </Button>
            <Button htmlType="submit" className="main-btn main-btn--primary min-width-140 ml-auto">
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default PhotosUpload;
