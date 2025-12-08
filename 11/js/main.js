
import { photos } from './data.js';
import { renderPictures } from './rendering.js';

document.addEventListener('DOMContentLoaded', () => {
  renderPictures();
});

export { photos, renderPictures };
