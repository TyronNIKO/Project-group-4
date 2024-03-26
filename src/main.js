import modal from './js/modal';
import { loadReviews, loadMore } from './js/reviews.js';
import slider from './js/slider';

slider('.mySwiper');
loadReviews('.reviews-list-item');
globalThis.loadMore = loadMore;
