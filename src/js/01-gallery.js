import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const makeGalleryMarkup = ({ preview, original, description }) =>
  `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}"alt="${description}"></a></div>`;

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(makeGalleryMarkup).join('');
galleryRef.innerHTML = galleryMarkup;

let gallery = new SimpleLightbox('.gallery a', {});

gallery.options.captionPosition = 'bottom';
gallery.options.captionDelay = 250;
gallery.options.captionsData = 'alt';
