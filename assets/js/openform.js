const BODY = document.querySelector('.body')
const POPUPMENU = document.querySelector('.popup-form')
const CLOSEBTN = document.querySelector('.popup-form__close')


BODY.addEventListener('click',((event)=>{Formcall(event)}))
BODY.addEventListener('click',((event)=>{
    if(!event.target.closest('.asides-message'))
    ASIDESMESSANGE.classList.remove('active')
}))


CLOSEBTN.addEventListener('click',((event)=>{
    if(event.target.closest('.popup-form__close')|| event.target.closest('.popup-form__close-span')){
        POPUPMENU.classList.remove('active')
        BODY.classList.remove('activebody')
    }

}))

function Formcall(event){
    if((event.target.closest('.header__info-btn-1'))||(event.target.closest('.directions__card-btn'))||(event.target.closest('.offers__card-btn')) || (event.target.closest('.header__btn'))||(event.target.closest('.aside-button'))|| (event.target.closest('.footer__btn'))){
        POPUPMENU.classList.add('active')
        BODY.classList.add('activebody')
    }

}








