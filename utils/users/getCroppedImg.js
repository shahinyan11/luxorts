/**
 * @param image {HTMLImageElement}
 * @param crop {object}
 * @param fileName {string}
 * @returns Promise
 */
const getCroppedImg = (image, crop, fileName) => {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  // New lines to be added
  const pixelRatio = window.devicePixelRatio;
  canvas.width = crop.width * pixelRatio;
  canvas.height = crop.height * pixelRatio;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = 'high';

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height,
  );

  // As a blob
  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        // eslint-disable-next-line no-param-reassign
        blob.name = fileName;
        resolve(blob);
      },
      'image/jpeg',
      1,
    );
  });
};

export default getCroppedImg;
