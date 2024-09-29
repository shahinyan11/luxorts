import getCroppedImg from '../getCroppedImg';

it('getCroppedImg util should returns blob', async () => {
  const blobAnswer = {
    size: 1321321,
  };

  Object.defineProperty(document, 'createElement', {
    value: jest.fn(() => ({
      getContext: jest.fn(() => ({
        setTransform: jest.fn(),
        drawImage: jest.fn(),
      })),
      toBlob: jest.fn((c) => {
        c(blobAnswer);
      }),
    })),
  });

  const image = {
    naturalWidth: 1000,
    naturalHeight: 1000,
    width: 400,
    height: 400,
  };

  const crop = {
    x: 0,
    y: 0,
    width: 400,
    height: 400,
  };

  const blob = await getCroppedImg(image, crop, 'test');

  expect(blob).toMatchSnapshot();
});
