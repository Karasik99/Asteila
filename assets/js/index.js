const BURGER = document.querySelector('.header__burger')
const BODY = document.querySelector('.body')
const BURGERSPAN= document.querySelector('.header__burger-span')
const ASIDE = document.querySelector('.aside')
const ASIDEBTN = document.querySelector('.aside__button')

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