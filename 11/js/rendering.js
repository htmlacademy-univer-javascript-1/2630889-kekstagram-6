import { photos } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictureElement = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const image = pictureElement.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;

  pictureElement.dataset.id = photo.id;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    // console.log удален согласно правилам линтера

    const openPhotoEvent = new CustomEvent('openphoto', {
      detail: { photoId: photo.id }
    });
    document.dispatchEvent(openPhotoEvent);
  });

  return pictureElement;
};

const renderPictures = () => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const pictureElement = createPictureElement(photo);
    fragment.appendChild(pictureElement);
  });

  const existingPictures = picturesContainer.querySelectorAll('.picture');
  existingPictures.forEach((picture) => picture.remove());

  picturesContainer.appendChild(fragment);
};

const clearPictures = () => {
  const pictures = picturesContainer.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

export { renderPictures, clearPictures };
