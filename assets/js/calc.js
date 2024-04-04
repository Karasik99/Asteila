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
INPUTRANGE.addEventListener('touchmove',GetValueM2)
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















