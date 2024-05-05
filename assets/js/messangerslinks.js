let LINKS = document.querySelector('.messangers__links-btn')
let MENU = document.querySelector('.messangers__links-menu')
LINKS.addEventListener('click',((e)=>{
    if(e.target.closest('.messangers__links-btn')){
        MENU.classList.toggle('active')
    }
}))



