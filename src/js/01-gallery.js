import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('div.gallery');

const markupMake = galleryItems

  .map(({ preview, original, description }) => {
    const stringMarkup = `<a class="gallery__item" href="${original}">
    
  
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
    return stringMarkup;
  })
  .join();
console.log('markupMake: ', markupMake);

galleryEl.insertAdjacentHTML('beforeend', markupMake);

let lightbox = new SimpleLightbox('.gallery a', {
  showCounter: true,
  captionsData: 'alt',
  captionDelay: 250,
});
