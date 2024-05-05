
const CALLBTNS = document.querySelectorAll('.langs')
const LANGSMENU = document.querySelector('.langs-items')
let CURRENTLANG='en';

CALLBTNS.forEach(element => {
    element.addEventListener('click',(e)=>{OpenLangs(e)})
});

function OpenLangs(e){
    if(e.target.closest('.langs')){
        LANGSMENU.classList.toggle('active')
        LANGSMENU.addEventListener('click',(e)=>{GetLang(e)})
    }
}

function GetLang(e){
    if(e.target.closest('.langs-items-card')){
        CURRENTLANG = e.target.dataset.lang
        LANGSMENU.classList.remove('active')
        ASIDE.classList.remove('active')
        BODY.classList.remove('activebody')
        localStorage.setItem('lang',CURRENTLANG)
        TranslateLamps(CURRENTLANG)
    }
}


function TranslateLamps(CURRENTLANG){
    try{
        document.querySelector('.text400').innerHTML = data.text59[CURRENTLANG]
        document.querySelector('.text401').innerHTML = data.text159[CURRENTLANG]
        document.querySelector('.text402').placeholder = data.text60[CURRENTLANG]
        document.querySelector('.text403').placeholder = data.text61[CURRENTLANG]
        document.querySelector('.text404').placeholder = data.text62[CURRENTLANG]
        document.querySelector('.text405').innerHTML = data.text63[CURRENTLANG]
        document.querySelector('.text406').innerHTML = data.text172[CURRENTLANG]
        document.querySelector('.text407').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text408').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text409').innerHTML = data.text6[CURRENTLANG]
        document.querySelector('.text410').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text411').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text412').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text413').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text414').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text415').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text416').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text417').innerHTML = data.text12[CURRENTLANG]
        document.querySelector('.text418').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text419').innerHTML = data.text175[CURRENTLANG]
        document.querySelector('.text420').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text421').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text422').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text423').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text424').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text425').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text426').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text427').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text428').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text429').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text430').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text431').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text432').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text433').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text434').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text435').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text436').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text437').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text438').innerHTML = data.text153[CURRENTLANG]
        document.querySelector('.text439').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text440').innerHTML = data.text6[CURRENTLANG]
    }
    catch(err){
        console.log(`Произошел отлов ошибки ${err}`)
    }
}