
import { photos } from './data.js';
import { renderPictures } from './rendering.js';
import { initFullscreen } from './fullscreen.js';

document.addEventListener('DOMContentLoaded', () => {
  renderPictures();
  initFullscreen();
});

export { photos, renderPictures };
