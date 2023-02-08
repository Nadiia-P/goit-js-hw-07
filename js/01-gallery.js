import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryRender = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item">
    <a
      href="${galleryItem.original}"
      class="gallery__link">
      <img
        class="gallery__preview"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}" />
    </a>
  </div>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryRender);
