

const REVIEWSFORM = document.querySelector('.reviews-form')
const CLOSEREVIEWSBTN = document.querySelector('.reviews-form__close')
const REVIEWSFORMBTN = document.querySelector('.reviews__cards-slader-btn')

REVIEWSFORMBTN.addEventListener('click',(event)=>{
  if(event.target.closest('.reviews__cards-slader-btn')){
    REVIEWSFORM.classList.add('active')
    BODY.classList.add('activebody')
  }
})

CLOSEREVIEWSBTN.addEventListener('click',((event)=>{
    if(event.target.closest('.reviews-form__close')|| event.target.closest('.reviews-form__close-span')){
      REVIEWSFORM.classList.remove('active')
      BODY.classList.remove('activebody')
    }

}))












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