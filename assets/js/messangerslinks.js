let LINKS = document.querySelector('.messangers__links-btn')
let MENU = document.querySelector('.messangers__links-menu')
LINKS.addEventListener('click',((e)=>{
    if(e.target.closest('.messangers__links-btn')){
        MENU.classList.toggle('active')
    }
}))


let ACTIVECOUNTRY = document.querySelector('.active-lang')
let COUNTRIES = document.querySelector('.Countries')

ACTIVECOUNTRY.addEventListener('click',((event)=>{
    if(event.target.closest('.active-lang')){
        COUNTRIES.classList.toggle('active')
    }
}))

