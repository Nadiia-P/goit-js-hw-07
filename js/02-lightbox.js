import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const galleryRender = galleryItems
  .map(
    (galleryItem) =>
      `<a href="${galleryItem.original}"
      class="gallery__link">
      <img
        class="gallery__preview"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}" />
    </a>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryRender);

galleryContainer.addEventListener('click', onPreviewClick);
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
  scrollZoom: false,
});

function onPreviewClick(e) {
  if (e.target.nodeName !== 'IMG') return;
  e.preventDefault();
}
