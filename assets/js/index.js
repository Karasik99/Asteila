const BURGER = document.querySelector('.header__burger')
const BODY = document.querySelector('.body')
const BURGERSPAN= document.querySelector('.header__burger-span')
const ASIDE = document.querySelector('.aside')
const ASIDEBTN = document.querySelector('.aside__button')
const MOVETEXTCONTAINER = document.querySelector('.offers__cards')
const MOVETEXT = document.querySelectorAll('.offers__card-text')

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




MOVETEXTCONTAINER.addEventListener('click',((event)=>{
    MOVETEXT.forEach((event)=>{
        event.classList.remove('active')
    })
    if(event.target.closest('.offers__card-text')){
        event.target.classList.add('active')
    }
}))

BODY.addEventListener('click',((event)=>{
    if(!event.target.closest('.offers__card-text')){
        MOVETEXT.forEach((event)=>{
            event.classList.remove('active')
        })
    }
}))

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





// /////////////////////////////////КАЛЬКУЛЯТОР/////////////////////////////////

const INPUTRANGE = document.querySelector('.calculator__content-range')
let RANGEVALUE = document.querySelector('.calculator__content-range-value')

const PIPECONTAINER = document.querySelector('.pipe')
let PIPEVALUE = document.querySelector('.calculator__content-pipe-value')

const LIGHTCONTAINER = document.querySelector('.light')
let LIGHTVALUE = document.querySelector('.calculator__content-light-value')

const ANGLESCONTAINER = document.querySelector('.angles')
let ANGLESVALUE = document.querySelector('.calculator__content-angles-value')

let RESULT = document.querySelector('.calculator__content-summ-info-result')

INPUTRANGE.addEventListener('change',GetValueM2)
INPUTRANGE.addEventListener('mousemove',GetValueM2)
PIPECONTAINER.addEventListener('click',GetValuePipe)
LIGHTCONTAINER.addEventListener('click',GetValueLight)
ANGLESCONTAINER.addEventListener('click',GetValueAngles)

function GetValueM2(event){
    RANGEVALUE.innerHTML = event.target.value
    Result()
}

function GetValuePipe(event){
    if(PIPEVALUE.innerHTML > 0){

        if(event.target.closest('.add-pipes')){
            PIPEVALUE.innerHTML = Number(PIPEVALUE.innerHTML) + 1
        }
        else if(event.target.closest('.remove-pipes')){
            PIPEVALUE.innerHTML =  Number(PIPEVALUE.innerHTML) - 1
        }
    }
    else if(PIPEVALUE.innerHTML == 0){

        if(event.target.closest('.add-pipes')){
            PIPEVALUE.innerHTML = Number(PIPEVALUE.innerHTML) + 1
        }
    }
    else{
        PIPEVALUE.innerHTML = 0
    }
    Result()
    
}

function GetValueLight(event){

    if(LIGHTVALUE.innerHTML > 0){

        if(event.target.closest('.add-light')){
            LIGHTVALUE.innerHTML = Number(LIGHTVALUE.innerHTML) + 1
        }
        else if(event.target.closest('.remove-light')){
            LIGHTVALUE.innerHTML =  Number(LIGHTVALUE.innerHTML) - 1
        }
    }
    else if(LIGHTVALUE.innerHTML == 0){

        if(event.target.closest('.add-light')){
            LIGHTVALUE.innerHTML = Number(LIGHTVALUE.innerHTML) + 1
        }
    }
    else{
        LIGHTVALUE.innerHTML = 0
    }
    Result()
    
    
}

function GetValueAngles(event){

    if(ANGLESVALUE.innerHTML > 0){

        if(event.target.closest('.add-angles')){
            ANGLESVALUE.innerHTML = Number(ANGLESVALUE.innerHTML) + 1
        }
        else if(event.target.closest('.remove-angles')){
            ANGLESVALUE.innerHTML =  Number(ANGLESVALUE.innerHTML) - 1
        }
    }
    else if(ANGLESVALUE.innerHTML == 0){

        if(event.target.closest('.add-angles')){
            ANGLESVALUE.innerHTML = Number(ANGLESVALUE.innerHTML) + 1
        }
    }
    else{
        ANGLESVALUE.innerHTML = 0
    }
    Result()
    
    
}

function Result(){
    let result = (RANGEVALUE.innerHTML*16)+(PIPEVALUE.innerHTML*8)+(LIGHTVALUE.innerHTML*8)+(ANGLESVALUE.innerHTML*2)
    RESULT.innerHTML = result
}



///////////////////////////////////////////////////////////////////////////////





let LINKS = document.querySelector('.messangers__links-btn')
let MENU = document.querySelector('.messangers__links-menu')
LINKS.addEventListener('click',((e)=>{
    if(e.target.closest('.messangers__links-btn')){
        MENU.classList.toggle('active')
    }
}))