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
        TranslateHiddenCornises(CURRENTLANG)
    }
}


function TranslateHiddenCornises(CURRENTLANG){
    try{
        document.querySelector('.text300').innerHTML = data.text59[CURRENTLANG]
        document.querySelector('.text301').innerHTML = data.text159[CURRENTLANG]
        document.querySelector('.text302').placeholder = data.text60[CURRENTLANG]
        document.querySelector('.text303').placeholder = data.text61[CURRENTLANG]
        document.querySelector('.text304').placeholder = data.text62[CURRENTLANG]
        document.querySelector('.text305').innerHTML = data.text63[CURRENTLANG]
        document.querySelector('.text306').innerHTML = data.text172[CURRENTLANG]
        document.querySelector('.text307').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text308').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text309').innerHTML = data.text6[CURRENTLANG]
        document.querySelector('.text310').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text311').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text312').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text313').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text314').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text315').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text316').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text317').innerHTML = data.text12[CURRENTLANG]
        document.querySelector('.text318').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text319').innerHTML = data.text174[CURRENTLANG]
        document.querySelector('.text320').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text321').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text322').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text323').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text324').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text325').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text326').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text327').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text328').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text329').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text330').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text331').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text332').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text333').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text334').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text335').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text336').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text337').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text338').innerHTML = data.text153[CURRENTLANG]
        document.querySelector('.text339').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text340').innerHTML = data.text6[CURRENTLANG]
    }
    catch(err){
        console.log(`Произошел отлов ошибки ${err}`)
    }
}