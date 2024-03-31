


const REVIEWS = document.querySelector('.reviews__cards')


async function GetReviews(){
    let response = await fetch('https://660996190f324a9a28837e41.mockapi.io/reviews')
    if (response.ok) { 
        let result = await response.json();
        CreateReviews(result)
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }
}

function CreateReviews(data){
    let star = '<img src="./assets/images/icons/star.png" alt="" class="reviews__star">'
    data.forEach(element => {
        let stars = document.createElement('div')
        stars.classList.add('reviews__stars')
        for (let index = 0; index < element.stars; index++) {
            stars.innerHTML = stars.innerHTML + star
        }
        console.log(element.photo)
        let result = `
        <div class="reviews__card">
            <div class="reviews__info">
                <div class="reviews__users-info">
                    <img class="reviews__img" src = '${element.photo}' alt="">
                    <h3 class="reviews__user-name">${element.username}</h3>
                </div>
                <div class='reviews__stars'>
                    ${stars.innerHTML} 
                </div>
            </div>
            <p class="reviews__text">
                ${element.text}
            </p>
        </div>`
        REVIEWS.innerHTML = REVIEWS.innerHTML + result
    });
}
