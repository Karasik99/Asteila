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


document.addEventListener('DOMContentLoaded',function(){
    LOAD.classList.add('active')
    BODY.classList.remove('activebody')
    let lang = localStorage.getItem('lang')
    if(lang==null){
        TranslateLamps(CURRENTLANG)
    }
    else{
        TranslateLamps(lang)
    }
})