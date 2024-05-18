let LOAD = document.querySelector('.loading')
// window.addEventListener('load',((event)=>{
//     LOAD.classList.add('active')
//     BODY.classList.remove('activebody')
//     let lang = localStorage.getItem('lang')
//     if(lang==null){
//         TranslateCornises(CURRENTLANG)
//     }
//     else{
//         TranslateCornises(lang)
//     }
// }))




document.addEventListener('DOMContentLoaded',function(){
    LOAD.classList.add('active')
    BODY.classList.remove('activebody')
    let lang = localStorage.getItem('lang')
    if(lang==null){
        TranslateCornises(CURRENTLANG)
    }
    else{
        TranslateCornises(lang)
    }
}) 