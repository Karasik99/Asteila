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
        TranslateTrak(CURRENTLANG)
    }
}


function TranslateTrak(CURRENTLANG){
    try{
        document.querySelector('.text600').innerHTML = data.text59[CURRENTLANG]
        document.querySelector('.text601').innerHTML = data.text159[CURRENTLANG]
        document.querySelector('.text602').placeholder = data.text60[CURRENTLANG]
        document.querySelector('.text603').placeholder = data.text61[CURRENTLANG]
        document.querySelector('.text604').placeholder = data.text62[CURRENTLANG]
        document.querySelector('.text605').innerHTML = data.text63[CURRENTLANG]
        document.querySelector('.text606').innerHTML = data.text172[CURRENTLANG]
        document.querySelector('.text607').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text608').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text609').innerHTML = data.text6[CURRENTLANG]
        document.querySelector('.text610').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text611').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text612').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text613').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text614').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text615').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text616').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text617').innerHTML = data.text12[CURRENTLANG]

        document.querySelector('.text618').innerHTML = data.text178[CURRENTLANG]
        document.querySelector('.text619').innerHTML = data.text177[CURRENTLANG]

        document.querySelector('.text620').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text621').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text622').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text623').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text624').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text625').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text626').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text627').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text628').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text629').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text630').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text631').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text632').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text633').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text634').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text635').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text636').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text637').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text638').innerHTML = data.text153[CURRENTLANG]
        document.querySelector('.text639').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text640').innerHTML = data.text6[CURRENTLANG]
    }
    catch(err){
        console.log(`Произошел отлов ошибки ${err}`)
    }
}