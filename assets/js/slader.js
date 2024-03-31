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