import { galleryItems } from './gallery-items.js';

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
        alt="${galleryItem.description}" 
        data-src="${galleryItem.original}" />
    </a>
  </div>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryRender);

galleryContainer.addEventListener('click', onPreviewClick);

function onPreviewClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(
    `<img alt="${e.target.alt}" src="${e.target.dataset.src}" width="1280" ></img>`
  );
  instance.show();

  if (basicLightbox.visible) {
    window.addEventListener('keydown', (e) => {
      if (e.code !== 'Escape') return;
      instance.close();
    });
  }
}
