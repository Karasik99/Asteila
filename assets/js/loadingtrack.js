let LOAD = document.querySelector('.loading')
// window.addEventListener('load',((event)=>{
//     LOAD.classList.add('active')
//     BODY.classList.remove('activebody')
//     let lang = localStorage.getItem('lang')
//     if(lang==null){
//         TranslateTrak(CURRENTLANG)
//     }
//     else{
//         TranslateTrak(lang)
//     }
// }))

document.body.onload = function(){
    LOAD.classList.add('active')
    BODY.classList.remove('activebody')
    let lang = localStorage.getItem('lang')
    if(lang==null){
        TranslateTrak(CURRENTLANG)
    }
    else{
        TranslateTrak(lang)
    }
}