





function videoUrl(url) {
    document.querySelector(".reviews__videos-active").src = url;
}


$('.reviews__cards-wrapper').slick({
  infinite: true,
  dots:false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }]
});