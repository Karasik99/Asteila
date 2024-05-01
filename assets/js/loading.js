
let LOAD = document.querySelector('.loading')
window.addEventListener('load',((event)=>{
    LOAD.classList.add('active')
    BODY.classList.remove('activebody')
    GetReviews()
}))

window.addEventListener('touchmove',Loading)

function Loading(){
    LOAD.classList.add('active')
    BODY.classList.remove('activebody')
}