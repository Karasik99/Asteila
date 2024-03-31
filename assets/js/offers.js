const MOVETEXTCONTAINER = document.querySelector('.offers__cards')
const MOVETEXT = document.querySelectorAll('.offers__card-text')


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