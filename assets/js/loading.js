
let LOAD = document.querySelector('.loading')
window.addEventListener('load',((event)=>{
    LOAD.classList.add('active')
    BODY.classList.remove('activebody')
    GetReviews()
    let lang = localStorage.getItem('lang')
    if(lang==null){
        Translate(CURRENTLANG)
    }
    else{
        Translate(lang)
    }
}))
