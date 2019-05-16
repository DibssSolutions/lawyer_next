import slick from 'slick-carousel';

const slider = $('.js-slider');
slider.each((i,el) => {
  const prevBtn = $('.js-slider-prev', $(el));
  const nextBtn = $('.js-slider-next', $(el));
  const container = $('.js-slider-container', $(el));
  const slideShow = container.data('slider-show') || 3;
  container.slick({
    slidesToShow: slideShow,
    infinite: false,
    slidesToScroll: 1,
    prevArrow: prevBtn,
    nextArrow: nextBtn,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});
