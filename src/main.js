import { Modal } from './js/modal.js';
import { loadReviews, loadMore } from './js/reviews.js';
// import slider from './js/slider';

globalThis.Modal = Modal;

loadReviews('.reviews-list-item');
globalThis.loadMore = loadMore;

// slider('.mySwiper');
