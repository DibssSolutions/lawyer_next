import { HTML } from '../constants';
const header = $('.js-header');
const btn = $('.js-btn-menu');
const openMenu = 'is-open-menu';

btn.on('click', () => {
  (!HTML.hasClass(openMenu))
    ? HTML.addClass(openMenu)
    : HTML.removeClass(openMenu);
});

$('.js-search-btn').on('click', function() {
  $(this).parents('.js-search').toggleClass('is-open');
});
