const POPUPFORM = document.querySelector('.popup-form')
const ASIDESMESSANGE = document.querySelector('.asides-message') 

POPUPFORM.addEventListener('submit',((event)=>{Submit(event)}))

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

    ASIDESMESSANGE.classList.add('active')
    // sendEmail(obj)
    sendMessageTelegram(obj)
}


async function sendEmail(obj){
        let posts = ['nikitaneilko8@yandex.by','neilkonikita@gmail.com']
        const param ={
            host:'smtp.elasticemail.com',
            username:'nikita.carasevitch@yandex.by',
            password:'B2FCEC0755143E5792134C4D30F3628F0C23',
            from:'nikita.carasevitch@yandex.by',
            subject:'Новая заявка с сайта',
        }
        posts.forEach(element => { 
            try{
                Email.send({
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
                    <h2>Email почта: ${obj.email}</h2>`
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
    Email почта: ${obj.email}%0A `

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}/` 

    let api = new XMLHttpRequest();
    api.open("GET",url,'true');
    api.send()
}

