

const REVIEWSFORM = document.querySelector('.reviews-form')
const CLOSEREVIEWSBTN = document.querySelector('.reviews-form__close')
const REVIEWSCARDSLIDERBTN = document.querySelector('.reviews__cards-slader-btn')
const REVIEWSFORMBTN = document.querySelector('.reviews-form')


REVIEWSCARDSLIDERBTN.addEventListener('click',(event)=>{
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

REVIEWSFORM.addEventListener('submit',((event)=>{SendReviews(event)}))



function SendReviews(event){
  event.preventDefault()
  let formdata = new FormData(event.target)
  Object.fromEntries(formdata)
  POPUPMENU.classList.remove('active')
  BODY.classList.remove('activebody')
  event.target.reset()
  let obj ={}

  let currentdate = new Date();
  let datetime = currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getFullYear()
  
  for (var pair of formdata.entries()) {
      obj[pair[0]] = pair[1]  
  }

  let newreview = {
    username:obj.name,
    telephone:obj.telephone,
    email:obj.email,
    city:obj.city,
    review:obj.review,
    date:datetime,

  };
  
  fetch('https://660996190f324a9a28837e41.mockapi.io/Comments', {
  method: 'POST',
  headers: {'content-type':'application/json'},
  body: JSON.stringify(newreview)
}).then(res => {
  if (res.ok) {
      return window.location.reload();
  }
})}


async function GetReviews(){
  let response = await fetch('https://660996190f324a9a28837e41.mockapi.io/Comments')
  let data = await response.json()
  data.forEach(element => {
    console.log(element)
  }); 
}







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