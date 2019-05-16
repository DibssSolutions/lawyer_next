import { HTML } from '../constants';
const header = $('.js-header');
const btn = $('.js-btn-menu');
const openMenu = 'is-open-menu';

btn.on('click', () => {
  (!HTML.hasClass(openMenu))
    ? HTML.addClass(openMenu)
    : HTML.removeClass(openMenu);
});
