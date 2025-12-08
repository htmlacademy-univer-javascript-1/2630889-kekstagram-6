
import { photos } from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const pictureCancel = bigPicture.querySelector('#picture-cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.body;

const getPhotoById = (id) => photos.find((photo) => photo.id === id);

const createCommentElement = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const avatar = document.createElement('img');
  avatar.classList.add('social__picture');
  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  avatar.width = 35;
  avatar.height = 35;

  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = comment.message;

  commentElement.appendChild(avatar);
  commentElement.appendChild(text);

  return commentElement;
};

const clearComments = () => {
  socialComments.innerHTML = '';
};

const renderComments = (comments) => {
  clearComments();

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    fragment.appendChild(commentElement);
  });
  socialComments.appendChild(fragment);
};

const openBigPicture = (photoId) => {
  const photo = getPhotoById(photoId);

  if (!photo) {
    return;
  }


  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.description;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;

  renderComments(photo.comments);

  if (socialCommentCount) {
    socialCommentCount.classList.add('hidden');
  }

  if (commentsLoader) {
    commentsLoader.classList.add('hidden');
  }

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const initFullscreen = () => {
  pictureCancel.addEventListener('click', () => {
    closeBigPicture();
  });

  bigPicture.addEventListener('click', (evt) => {
    if (evt.target === bigPicture) {
      closeBigPicture();
    }
  });

  document.addEventListener('openphoto', (evt) => {
    openBigPicture(evt.detail.photoId);
  });

  document.addEventListener('keydown', onDocumentKeydown);
};

export { initFullscreen, openBigPicture, closeBigPicture };
