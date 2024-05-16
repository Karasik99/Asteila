
let LOAD = document.querySelector('.loading')
// window.addEventListener('onload',((event)=>{
//     LOAD.classList.add('active')
//     BODY.classList.remove('activebody')
//     GetReviews()
//     let lang = localStorage.getItem('lang')
//     if(lang==null){
//         Translate(CURRENTLANG)
//     }
//     else{
//         Translate(lang)
//     }
// }))

window.onload = function(){
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
}