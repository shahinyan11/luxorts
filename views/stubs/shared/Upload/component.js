import { Upload } from 'antd';

const { Dragger } = Upload;

const UploadPhoto = () => (
  <Dragger>
    <img src="/images/upload.png" width="136" height="136" alt="" className="mb-16" />
    <p className="ant-upload-hint text-body mb-0">Upload image or drop it here</p>
  </Dragger>
);

export default UploadPhoto;
