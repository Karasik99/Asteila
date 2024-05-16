const POPUPFORM = document.querySelector('.popup-form')
const CONSULTATIONFORM = document.querySelector('.consultation__form')
const CALCULATORFORM = document.querySelector('.calculator__content-form')
const ASIDESMESSANGE = document.querySelector('.asides-message') 

POPUPFORM.addEventListener('submit',((event)=>{Submit(event)}))
CONSULTATIONFORM.addEventListener('submit',((event)=>{Submit(event)}))
CALCULATORFORM.addEventListener('submit',((event)=>{Submit(event)}))


function Submit(event){
    event.preventDefault()
    let formdata = new FormData(event.target)
    Object.fromEntries(formdata)
    POPUPMENU.classList.remove('active')
    BODY.classList.remove('activebody')
    event.target.reset()
    let obj ={}
    
    for (var pair of formdata.entries()) {
        obj[pair[0]] = pair[1]
    }

    obj.RANGEVALUE = RANGEVALUE.innerHTML
    obj.PIPEVALUE = PIPEVALUE.innerHTML
    obj.LIGHTVALUE = LIGHTVALUE.innerHTML
    obj.ANGLESVALUE = ANGLESVALUE.innerHTML
    obj.RESULT = RESULT.innerHTML
    ASIDESMESSANGE.classList.add('active')
    sendEmail(obj)
    // sendMessageTelegram(obj)
}


async function sendEmail(obj){
        let posts = ['nikitaneilko8@yandex.by','nikita.carasevitch@yandex.by']
        const param ={
            host:'smtp.elasticemail.com',
            username:'asteilasms@gmail.com',
            password:'59531F481CEB51CCE070DF58A3BAE135DAD6',
            from:'asteilasms@gmail.com',
            subject:'Новая заявка с сайта',
        }
        posts.forEach(element => { 
            try{
                Email.send({
                    SecureToken: 'aff345ea-b922-49cb-9cc4-0b72d6410466',
                    Host : param.host,
                    Username : param.username,
                    Password : param.password,
                    To : `${element}`,
                    From : param.from,
                    Subject : param.subject,
                    Body : `
                    <h2>Новый клиент хочет узнать подробнее о потолках</h2>
                    <h2>Его данные:</h2>
                    <h2>Имя клиента: ${obj.name}</h2>
                    <h2>Номер клиента: ${obj.telephone}</h2>
                    <h2>Email почта: ${obj.email}</h2>
                    <h2>Его расчеты, исходя из калькулятора:</h2>
                    <h3>Метры квадратные : ${obj.RANGEVALUE}</h3>
                    <h3>Количество труб : ${obj.PIPEVALUE}</h3>
                    <h3>Количество светильников : ${obj.LIGHTVALUE}</h3>
                    <h3>Количество углов : ${obj.ANGLESVALUE}</h3>
                    <h3>Итоговая сумма : ${obj.RESULT} €</h3>`
                    })
            }
            catch(e){
                console.log('Не оплачена отправка писем на email')
            }
            });
}


async function sendMessageTelegram(obj){
    const token =  "6536032829:AAGJt84Fx5iABijzDdj9YoF7kYsICDFp0AU"
    const chat_id = '-1002115025266'
    let text = `
    Новый клиент хочет узнать подробнее о потолках %0A
    Имя клиента: ${obj.name}%0A
    Номер клиента: ${obj.telephone}%0A
    Email почта: ${obj.email}%0A
    Его расчеты, исходя из калькулятора:%0A
    Метры квадратные : ${obj.RANGEVALUE}%0A
    Количество труб : ${obj.PIPEVALUE}%0A
    Количество светильников : ${obj.LIGHTVALUE}%0A
    Количество углов : ${obj.ANGLESVALUE}%0A
    Итоговая сумма : ${Number(obj.RESULT)} € `

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}/` 

    let api = new XMLHttpRequest();
    api.open("GET",url,'true');
    api.send()
}

