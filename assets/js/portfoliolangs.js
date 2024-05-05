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
        TranslatePortfolio(CURRENTLANG)
    }
}


function TranslatePortfolio(CURRENTLANG){
    try{
        document.querySelector('.text500').innerHTML = data.text59[CURRENTLANG]
        document.querySelector('.text501').innerHTML = data.text159[CURRENTLANG]
        document.querySelector('.text502').placeholder = data.text60[CURRENTLANG]
        document.querySelector('.text503').placeholder = data.text61[CURRENTLANG]
        document.querySelector('.text504').placeholder = data.text62[CURRENTLANG]
        document.querySelector('.text505').innerHTML = data.text63[CURRENTLANG]
        document.querySelector('.text506').innerHTML = data.text172[CURRENTLANG]
        document.querySelector('.text507').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text508').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text509').innerHTML = data.text6[CURRENTLANG]
        document.querySelector('.text510').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text511').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text512').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text513').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text514').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text515').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text516').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text517').innerHTML = data.text12[CURRENTLANG]

        document.querySelector('.text518').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text519').innerHTML = data.text176[CURRENTLANG]

        document.querySelector('.text520').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text521').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text522').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text523').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text524').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text525').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text526').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text527').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text528').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text529').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text530').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text531').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text532').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text533').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text534').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text535').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text536').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text537').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text538').innerHTML = data.text153[CURRENTLANG]
        document.querySelector('.text539').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text540').innerHTML = data.text6[CURRENTLANG]
    }
    catch(err){
        console.log(`Произошел отлов ошибки ${err}`)
    }
}