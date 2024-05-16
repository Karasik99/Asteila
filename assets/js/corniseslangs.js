const CALLBTNS = document.querySelectorAll('.langs')
const LANGSMENU = document.querySelector('.langs-items')

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
        TranslateCornises(CURRENTLANG)
    }
}


function TranslateCornises(CURRENTLANG){
    try{
        document.querySelector('.text200').innerHTML = data.text59[CURRENTLANG]
        document.querySelector('.text201').innerHTML = data.text159[CURRENTLANG]
        document.querySelector('.text202').placeholder = data.text60[CURRENTLANG]
        document.querySelector('.text203').placeholder = data.text61[CURRENTLANG]
        document.querySelector('.text204').placeholder = data.text62[CURRENTLANG]
        document.querySelector('.text205').innerHTML = data.text63[CURRENTLANG]
        document.querySelector('.text206').innerHTML = data.text172[CURRENTLANG]
        document.querySelector('.text207').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text208').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text209').innerHTML = data.text6[CURRENTLANG]
        document.querySelector('.text210').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text211').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text212').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text213').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text214').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text215').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text216').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text217').innerHTML = data.text12[CURRENTLANG]
        document.querySelector('.text218').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text219').innerHTML = data.text173[CURRENTLANG]
        document.querySelector('.text220').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text221').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text222').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text223').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text224').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text225').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text226').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text227').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text228').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text229').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text230').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text231').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text232').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text233').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text234').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text235').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text236').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text237').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text238').innerHTML = data.text153[CURRENTLANG]
        document.querySelector('.text239').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text240').innerHTML = data.text6[CURRENTLANG]
    }
    catch(err){
        console.log(`Произошел отлов ошибки ${err}`)
    }
}