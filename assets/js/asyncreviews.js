

const REVIEWSFORM = document.querySelector('.reviews-form')
const CLOSEREVIEWSBTN = document.querySelector('.reviews-form__close')
const REVIEWSCARDSLIDERBTN = document.querySelector('.reviews__cards-slader-btn')
const REVIEWSFORMBTN = document.querySelector('.reviews-form')
const REVIEWSWRAPPER = document.querySelector('.reviews__cards-wrapper')


const STARSVALUE = document.querySelector('.reviews-form__stars-value')
let STARSINPUT = document.querySelector('.reviews-form__stars-count')

STARSINPUT.addEventListener('change',GetStarsCount)
STARSINPUT.addEventListener('mousemove',GetStarsCount)
STARSINPUT.addEventListener('touchmove',GetStarsCount)

function GetStarsCount(event){
  STARSVALUE.innerHTML = `Stars: ${event.target.value}`
}

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
  REVIEWSFORM.classList.remove('active')
  let formdata = new FormData(event.target)
  Object.fromEntries(formdata)
  POPUPMENU.classList.remove('active')
  BODY.classList.remove('activebody')
  event.target.reset()
  let obj ={}

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); 
  let yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  
  for (var pair of formdata.entries()) {
      obj[pair[0]] = pair[1]  
  }

  
  let newreview = {
    username:obj.name,
    email:obj.email,
    city:obj.city,
    review:obj.review,
    date:today,
    stars:obj.stars
  };


  sendReviewTelegram()
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
  let star = '<img src="./assets/images/icons/star.png" alt="stars">'
  data.reverse().forEach(element => {
    let stars = document.createElement('div')
        stars.classList.add('reviews__card__content-stars')
        for (let index = 0; index < element.stars; index++) {
            stars.innerHTML = stars.innerHTML + star
        }

    let review = `<div class="reviews__card">
                    <div class="reviews__card__content">
                        <div class="reviews__card__content-stars">
                            ${stars.innerHTML} 
                        </div>
                        <p class="reviews__card__content-text">
                            ${element.review}
                        </p>
                    </div>
                    <div class="reviews__card__user">
                        <div class="reviews__card__user-info">
                            <img src="./assets/images/icons/user.png" alt="фото">
                            <div class="reviews__card__user-data">
                                <p class="reviews__card__user-data-name">
                                ${element.username}
                                </p>
                                <p class="reviews__card__user-data-city">
                                ${element.city}
                                </p>
                                <p class="reviews__card__user-data-email">
                                ${element.email}
                                </p>
                            </div>
                        </div>
                        <div class="reviews__card__date">
                            <p>
                            ${element.date}
                            </p>
                        </div>
                    </div>
                    </div>`

    REVIEWSWRAPPER.innerHTML += (review)
  }); 
  Slider()
}


function videoUrl(url) {
    document.querySelector(".reviews__videos-active").src = url;
}

async function Slider(){
  $('.reviews__cards-wrapper').slick({
    infinite: true,
    dots:false,
    arrows: true,
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
}


async function sendReviewTelegram(){
  const token =  "6536032829:AAGJt84Fx5iABijzDdj9YoF7kYsICDFp0AU"
  const chat_id = '-1002115025266'
  let text = `На сайте Asteila,размещен отзыв https://github.com/Karasik99/Asteila`
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}/` 
  let api = new XMLHttpRequest();
  api.open("GET",url,'true');
  api.send()
}