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

galleryRef.addEventListener('click', onItemClick);

function onItemClick(event) {
  event.preventDefault();

  //   if (event.target.tagName !== 'IMG') {
  //     return;
  //   }

  let gallery = new SimpleLightbox('.gallery a');
  gallery.options.captionPosition = 'bottom';
  gallery.options.captionDelay = 250;
  gallery.options.captionsData = 'alt';
}
//   const instance = basicLightbox.create(
//     `<img src=${event.target.dataset.source} width="800" height="600">`,
//     {
//       onShow: instance => {
//         function onSpaceKeydown(event) {
//           if (event.code === 'Space') {
//             galleryRef.removeEventListener('keydown', onSpaceKeydown);
//             instance.close();
//           }
//         }
//         galleryRef.addEventListener('keydown', onSpaceKeydown);
//       },
//     }
//   );
//   instance.show();
// }
