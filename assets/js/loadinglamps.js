let LOAD = document.querySelector('.loading')
// window.addEventListener('load',((event)=>{
//     LOAD.classList.add('active')
//     BODY.classList.remove('activebody')
//     let lang = localStorage.getItem('lang')
//     if(lang==null){
//         TranslateLamps(CURRENTLANG)
//     }
//     else{
//         TranslateLamps(lang)
//     }
// }))


window.onload = function(){
    LOAD.classList.add('active')
    BODY.classList.remove('activebody')
    let lang = localStorage.getItem('lang')
    if(lang==null){
        TranslateLamps(CURRENTLANG)
    }
    else{
        TranslateLamps(lang)
    }
}