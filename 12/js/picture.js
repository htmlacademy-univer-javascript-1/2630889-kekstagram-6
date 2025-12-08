const getPictureById = (id) => {
  const pictureElement = document.querySelector(`.picture[data-id="${id}"]`);
  return pictureElement;
};

const updatePictureLikes = (id, newLikesCount) => {
  const pictureElement = getPictureById(id);
  if (pictureElement) {
    pictureElement.querySelector('.picture__likes').textContent = newLikesCount;
  }
};

const updatePictureComments = (id, newCommentsCount) => {
  const pictureElement = getPictureById(id);
  if (pictureElement) {
    pictureElement.querySelector('.picture__comments').textContent = newCommentsCount;
  }
};

export { getPictureById, updatePictureLikes, updatePictureComments };
