const BURGER = document.querySelector('.header__burger')
const BODY = document.querySelector('.body')
const BURGERSPAN= document.querySelector('.header__burger-span')
const ASIDE = document.querySelector('.aside')
const ASIDEBTN = document.querySelector('.aside__button')
let OFFSET = 0
let INDEX = 0
let BTNNEXT = document.querySelector('.directions__buttons-next')
let BTNPREV = document.querySelector('.directions__buttons-prev')
let SLIDERLINE = document.getElementById('#line')
let DOTS = document.querySelector('.directions__dots')
let COUNT = document.querySelectorAll('.directions__slider-line > img')

BTNNEXT.addEventListener('click', (e)=>{SliderMoveRight(e)})
BTNPREV.addEventListener('click', (e)=>{SliderMoveLeft(e)})
DOTS.addEventListener('click',(e)=>{SliderMoveonclickDots(e)})

BURGER.addEventListener('click',((event)=>{
    if(event.target.closest('.header__burger') || event.target.closest('.header__burger-span')){
        ASIDE.classList.add('active')
        BODY.classList.add('activebody')
    }
}))

ASIDEBTN.addEventListener('click',((event)=>{
    if(event.target.closest('.aside__button') || event.target.closest('.aside__button-span')){
        ASIDE.classList.remove('active')
        BODY.classList.remove('activebody')
    }
}))

function SliderMoveRight(e){
    if(e.target.closest('.directions__buttons-next')){
        OFFSET = OFFSET+100
        INDEX = INDEX+1
        console.log(INDEX)
        console.log(OFFSET)
        if(OFFSET>(COUNT.length-1)*100){
            OFFSET = 0
        }
        if(INDEX>(COUNT.length-1)){
            INDEX = 0
        }
        ChangeDots(INDEX)
        SLIDERLINE.style.transform = `translateX(${-OFFSET}%)`;
    }
}

BTNPREV.addEventListener('click',((event)=>{
    
}))

function SliderMoveLeft(e){
    if(e.target.closest('.directions__buttons-prev')){
        OFFSET = OFFSET-100
        INDEX = INDEX-1
        if(OFFSET<0){
            OFFSET = (COUNT.length-1)*100
        }
        if(INDEX<0){
            INDEX = (COUNT.length-1)
        }
        console.log(INDEX)
        ChangeDots(INDEX)
        SLIDERLINE.style.transform = `translateX(${-OFFSET}%)`;
    }
}


function ChangeDots(){
    DOTS.innerHTML = ''
    for (let index = 0; index < COUNT.length; index++) {
        if(INDEX == index){
            DOTS.innerHTML = DOTS.innerHTML + `<div id=${index} class='directions__dot active'></div>`
        }
        else{
            DOTS.innerHTML = DOTS.innerHTML + `<div id=${index} class='directions__dot'></div>`
        }
    }
}

function SliderMoveonclickDots(e){
    if(e.target.closest('.directions__dot')){
        INDEX = Number(e.target.id)
        ChangeDots(INDEX)
        OFFSET = OFFSET = (INDEX)*100
        console.log(INDEX)
        console.log(OFFSET)
        SLIDERLINE.style.transform = `translateX(${-OFFSET}%)`;
    }
}


ChangeDots(INDEX)





