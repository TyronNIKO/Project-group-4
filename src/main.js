import { Modal } from './js/modal.js';
import { loadReviews, loadMore } from './js/reviews.js';
import slider from './js/slider';

slider('.mySwiper');
loadReviews('.reviews-list-item');
console.log(Modal);

globalThis.Modal = Modal;
globalThis.loadMore = loadMore;
