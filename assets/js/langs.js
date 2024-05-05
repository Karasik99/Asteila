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
        Translate(CURRENTLANG)
    }
}


function Translate(CURRENTLANG){
    try{
        document.querySelector('.text1').innerHTML = data.text1[CURRENTLANG]
        document.querySelector('.text2').innerHTML = data.text2[CURRENTLANG]
        document.querySelector('.text3').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text4').innerHTML = data.text4[CURRENTLANG]
        document.querySelector('.text5').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text6').innerHTML = data.text6[CURRENTLANG]
        document.querySelector('.text7').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text8').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text9').innerHTML = data.text9[CURRENTLANG]
        document.querySelector('.text10').innerHTML = data.text10[CURRENTLANG]
        document.querySelector('.text11').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text12').innerHTML = data.text12[CURRENTLANG]
        document.querySelector('.text13').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text14').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text15').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text16').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text17').innerHTML = data.text17[CURRENTLANG]
        document.querySelector('.text18').innerHTML = data.text18[CURRENTLANG]
        document.querySelector('.text19').innerHTML = data.text19[CURRENTLANG]
        document.querySelector('.text20').innerHTML = data.text20[CURRENTLANG]
        document.querySelector('.text21').innerHTML = data.text21[CURRENTLANG]
        document.querySelector('.text22').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text23').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text24').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text25').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text26').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text27').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text28').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text29').innerHTML = data.text9[CURRENTLANG]
        document.querySelector('.text30').innerHTML = data.text10[CURRENTLANG]
        document.querySelector('.text31').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text32').innerHTML = data.text22[CURRENTLANG]
        document.querySelector('.text33').innerHTML = data.text3[CURRENTLANG]
        document.querySelector('.text34').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text35').innerHTML = data.text35[CURRENTLANG]
        document.querySelector('.text36').innerHTML = data.text36[CURRENTLANG]
        document.querySelector('.text37').innerHTML = data.text37[CURRENTLANG]
        document.querySelector('.text38').innerHTML = data.text38[CURRENTLANG]
        document.querySelector('.text39').innerHTML = data.text39[CURRENTLANG]
        document.querySelector('.text40').innerHTML = data.text40[CURRENTLANG]
        document.querySelector('.text41').innerHTML = data.text41[CURRENTLANG]
        document.querySelector('.text42').innerHTML = data.text42[CURRENTLANG]
        document.querySelector('.text43').innerHTML = data.text43[CURRENTLANG]
        document.querySelector('.text44').innerHTML = data.text44[CURRENTLANG]
        document.querySelector('.text45').innerHTML = data.text45[CURRENTLANG]
        document.querySelector('.text46').innerHTML = data.text46[CURRENTLANG]
        document.querySelector('.text47').innerHTML = data.text47[CURRENTLANG]
        document.querySelector('.text48').innerHTML = data.text48[CURRENTLANG]
        document.querySelector('.text49').innerHTML = data.text49[CURRENTLANG]
        document.querySelector('.text50').innerHTML = data.text50[CURRENTLANG]
        document.querySelector('.text51').innerHTML = data.text51[CURRENTLANG]
        document.querySelector('.text52').innerHTML = data.text52[CURRENTLANG]
        document.querySelector('.text53').innerHTML = data.text53[CURRENTLANG]
        document.querySelector('.text54').innerHTML = data.text54[CURRENTLANG]
        document.querySelector('.text55').innerHTML = data.text55[CURRENTLANG]
        document.querySelector('.text56').innerHTML = data.text56[CURRENTLANG]
        document.querySelector('.text57').innerHTML = data.text57[CURRENTLANG]
        document.querySelector('.text58').innerHTML = data.text55[CURRENTLANG]
        document.querySelector('.text59').innerHTML = data.text59[CURRENTLANG]
        document.querySelector('.text60').placeholder = data.text60[CURRENTLANG]
        document.querySelector('.text61').placeholder = data.text61[CURRENTLANG]
        document.querySelector('.text62').placeholder = data.text62[CURRENTLANG]
        document.querySelector('.text63').innerHTML = data.text63[CURRENTLANG]
        document.querySelector('.text64').innerHTML = data.text64[CURRENTLANG]
        document.querySelector('.text65').innerHTML = data.text65[CURRENTLANG]
        document.querySelector('.text66').innerHTML = data.text66[CURRENTLANG]
        document.querySelector('.text67').innerHTML = data.text67[CURRENTLANG]
        document.querySelector('.text68').innerHTML = data.text68[CURRENTLANG]
        document.querySelector('.text69').innerHTML = data.text69[CURRENTLANG]
        document.querySelector('.text70').innerHTML = data.text70[CURRENTLANG]
        document.querySelector('.text71').innerHTML = data.text71[CURRENTLANG]
        document.querySelector('.text72').innerHTML = data.text72[CURRENTLANG]
        document.querySelector('.text73').innerHTML = data.text73[CURRENTLANG]
        document.querySelector('.text74').innerHTML = data.text74[CURRENTLANG]
        document.querySelector('.text75').innerHTML = data.text75[CURRENTLANG]
        document.querySelector('.text76').innerHTML = data.text76[CURRENTLANG]
        document.querySelector('.text77').innerHTML = data.text77[CURRENTLANG]
        document.querySelector('.text78').innerHTML = data.text78[CURRENTLANG]
        document.querySelector('.text79').innerHTML = data.text79[CURRENTLANG]
        document.querySelector('.text79').innerHTML = data.text79[CURRENTLANG]
        document.querySelector('.text80').innerHTML = data.text80[CURRENTLANG]
        document.querySelector('.text81').innerHTML = data.text81[CURRENTLANG]
        document.querySelector('.text82').innerHTML = data.text82[CURRENTLANG]
        document.querySelector('.text83').innerHTML = data.text83[CURRENTLANG]
        document.querySelector('.text84').innerHTML = data.text84[CURRENTLANG]
        document.querySelector('.text85').innerHTML = data.text85[CURRENTLANG]
        document.querySelector('.text86').innerHTML = data.text86[CURRENTLANG]
        document.querySelector('.text87').innerHTML = data.text87[CURRENTLANG]
        document.querySelector('.text88').innerHTML = data.text80[CURRENTLANG]
        document.querySelector('.text89').innerHTML = data.text88[CURRENTLANG]
        document.querySelector('.text90').innerHTML = data.text89[CURRENTLANG]
        document.querySelector('.text91').innerHTML = data.text83[CURRENTLANG]
        document.querySelector('.text92').innerHTML = data.text84[CURRENTLANG]
        document.querySelector('.text93').innerHTML = data.text85[CURRENTLANG]
        document.querySelector('.text94').innerHTML = data.text86[CURRENTLANG]
        document.querySelector('.text95').innerHTML = data.text87[CURRENTLANG]
        document.querySelector('.text96').innerHTML = data.text80[CURRENTLANG]
        document.querySelector('.text97').innerHTML = data.text90[CURRENTLANG]
        document.querySelector('.text98').innerHTML = data.text91[CURRENTLANG]
        document.querySelector('.text99').innerHTML = data.text83[CURRENTLANG]
        document.querySelector('.text100').innerHTML = data.text84[CURRENTLANG]
        document.querySelector('.text101').innerHTML = data.text85[CURRENTLANG]
        document.querySelector('.text102').innerHTML = data.text86[CURRENTLANG]
        document.querySelector('.text103').innerHTML = data.text87[CURRENTLANG]
        document.querySelector('.text104').innerHTML = data.text80[CURRENTLANG]
        document.querySelector('.text105').innerHTML = data.text92[CURRENTLANG]
        document.querySelector('.text106').innerHTML = data.text93[CURRENTLANG]
        document.querySelector('.text107').innerHTML = data.text83[CURRENTLANG]
        document.querySelector('.text108').innerHTML = data.text84[CURRENTLANG]
        document.querySelector('.text109').innerHTML = data.text85[CURRENTLANG]
        document.querySelector('.text110').innerHTML = data.text86[CURRENTLANG]
        document.querySelector('.text111').innerHTML = data.text87[CURRENTLANG]
        document.querySelector('.text112').innerHTML = data.text112[CURRENTLANG]
        document.querySelector('.text113').innerHTML = data.text113[CURRENTLANG] 
        document.querySelector('.text114').innerHTML = data.text114[CURRENTLANG] 
        document.querySelector('.text115').innerHTML = data.text115[CURRENTLANG] 
        document.querySelector('.text116').innerHTML = data.text116[CURRENTLANG] 
        document.querySelector('.text117').innerHTML = data.text117[CURRENTLANG] 
        document.querySelector('.text118').innerHTML = data.text118[CURRENTLANG] 
        document.querySelector('.text119').innerHTML = data.text119[CURRENTLANG] 
        document.querySelector('.text120').innerHTML = data.text120[CURRENTLANG] 
        document.querySelector('.text121').innerHTML = data.text121[CURRENTLANG] 
        document.querySelector('.text122').innerHTML = data.text122[CURRENTLANG] 
        document.querySelector('.text123').innerHTML = data.text123[CURRENTLANG] 
        document.querySelector('.text124').innerHTML = data.text124[CURRENTLANG]
        document.querySelector('.text125').innerHTML = data.text125[CURRENTLANG]
        document.querySelector('.text126').innerHTML = data.text126[CURRENTLANG]
        document.querySelector('.text127').innerHTML = data.text127[CURRENTLANG]
        document.querySelector('.text128').innerHTML = data.text128[CURRENTLANG]
        document.querySelector('.text129').innerHTML = data.text129[CURRENTLANG]
        document.querySelector('.text130').innerHTML = data.text130[CURRENTLANG]
        document.querySelector('.text131').innerHTML = data.text131[CURRENTLANG]
        document.querySelector('.text132').innerHTML = data.text132[CURRENTLANG]
        document.querySelector('.text133').innerHTML = data.text130[CURRENTLANG]
        document.querySelector('.text134').innerHTML = data.text131[CURRENTLANG]
        document.querySelector('.text135').innerHTML = data.text135[CURRENTLANG]
        document.querySelector('.text136').innerHTML = data.text130[CURRENTLANG]
        document.querySelector('.text137').innerHTML = data.text131[CURRENTLANG]
        document.querySelector('.text138').innerHTML = data.text138[CURRENTLANG]
        document.querySelector('.text139').innerHTML = data.text139[CURRENTLANG]
        document.querySelector('.text140').innerHTML = data.text140[CURRENTLANG]
        document.querySelector('.text141').placeholder = data.text141[CURRENTLANG]
        document.querySelector('.text142').innerHTML = data.text142[CURRENTLANG]
        document.querySelector('.text144').innerHTML = data.text144[CURRENTLANG]
        document.querySelector('.text145').innerHTML = data.text63[CURRENTLANG]
        document.querySelector('.text146').innerHTML = data.text7[CURRENTLANG]
        document.querySelector('.text147').innerHTML = data.text13[CURRENTLANG]
        document.querySelector('.text148').innerHTML = data.text14[CURRENTLANG]
        document.querySelector('.text149').innerHTML = data.text8[CURRENTLANG]
        document.querySelector('.text150').innerHTML = data.text15[CURRENTLANG]
        document.querySelector('.text151').innerHTML = data.text16[CURRENTLANG]
        document.querySelector('.text152').innerHTML = data.text11[CURRENTLANG]
        document.querySelector('.text153').innerHTML = data.text153[CURRENTLANG]
        document.querySelector('.text154').innerHTML = data.text5[CURRENTLANG]
        document.querySelector('.text157').innerHTML = data.text6[CURRENTLANG]
        document.querySelector('.text158').innerHTML = data.text59[CURRENTLANG]
        document.querySelector('.text159').innerHTML = data.text159[CURRENTLANG]
        document.querySelector('.text160').placeholder = data.text60[CURRENTLANG]
        document.querySelector('.text161').placeholder = data.text61[CURRENTLANG]
        document.querySelector('.text162').placeholder = data.text62[CURRENTLANG]
        document.querySelector('.text163').innerHTML = data.text63[CURRENTLANG]
        document.querySelector('.text164').innerHTML = data.text164[CURRENTLANG]
        document.querySelector('.text165').innerHTML = data.text165[CURRENTLANG]
        document.querySelector('.text166').placeholder = data.text60[CURRENTLANG]
        document.querySelector('.text167').placeholder = data.text167[CURRENTLANG]
        document.querySelector('.text168').placeholder = data.text62[CURRENTLANG]
        document.querySelector('.text170').placeholder = data.text170[CURRENTLANG]
        document.querySelector('.text171').innerHTML = data.text63[CURRENTLANG]
        document.querySelector('.text172').innerHTML = data.text172[CURRENTLANG]
        
    }
    catch(err){
        console.log(`Произошел отлов ошибки ${err}`)
    }
}