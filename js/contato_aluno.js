document.addEventListener('DOMContentLoaded', function() {

    place_holder = document.querySelector('.entrada-msg')
    place_holder.placeholder = "Submeta um novo post"

    imagem = document.querySelector('.img-usuario')
    imagem.src = localStorage.getItem('src')

    nome = document.querySelector('.nome-usuario')
    nome.innerHTML = localStorage.getItem('nome')

    descricao = document.querySelector('.descricao-usuario')
    descricao.innerHTML = 'Aluno da Instituição'

    check_usu = document.querySelector('#notificacao-msg-1')
    check_usu.innerHTML = "✓✓"
    check_usu.style.color = "rgb(138,203,219)"

    check_usu_2 = document.querySelector('#notificacao-msg-2')
    check_usu_2.innerHTML = "✓✓"
    check_usu_2.style.color = "rgb(138,203,219)"

    check_usu_3 = document.querySelector('#notificacao-msg-3')
    check_usu_3.innerHTML = "✓✓"
    check_usu_3.style.color = "rgb(138,203,219)"

    resposta = document.querySelector('.msg-resposta')
    span = document.createElement('span')   
    span.innerHTML = "✓✓"
    span.style.color = "rgb(47,124,143)"
    resposta.appendChild(span)  

    check_usu_4 = document.querySelector('#notificacao-msg-4')
    check_usu_4.innerHTML = "✓✓"
    check_usu_4.style.color = "grey"

// document.querySelector('#notificacao-msg-1').style.left = '100px'
// check_usu.style.backgroundColor = '#B34983'

    main = document.querySelector('main')
    texto = document.querySelector('input[type=text]')
    enviar = document.querySelector('.botao-enviar')

    enviar.addEventListener('click', function(event) { 

        div_resp = document.createElement('div')   
        div_usu = document.createElement('div') 
        h2 = document.createElement('h2')
        h3 = document.createElement('h3')
        section = document.createElement('section')   
        div_resp.innerHTML = texto.value

        div_resp.className = "bolha-resposta"
        div_usu.className = "msg-titulo-invertida"
        section.className = "msg-resposta"

        h2.innerHTML = "'Professor'"
        h3.innerHTML = date + '//'+ time

        div_usu.appendChild (h2)
        div_usu.appendChild (h3)
        section.appendChild(div_usu)
        section.appendChild(div_resp)

        span_resp = document.createElement('span')   
        span_resp.innerHTML = "✓✓"
        span_resp.style.color = "#482861"
        section.appendChild(span_resp)  

        main.appendChild(section)     

        event.preventDefault()
    })

    msg_ident = document.querySelectorAll('.msg-usuario .msg-titulo h2')
    horario = document.querySelectorAll('.msg-usuario .msg-titulo h3')

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    msg_ident[0].innerHTML = nome.innerHTML
    horario[0].innerHTML = '2021-11-26 // 14:1:51'

    msg_ident[1].innerHTML = nome.innerHTML
    horario[1].innerHTML = '2021-11-26 // 14:10:53'

    for (var i=2; i<msg_ident.length; i++) {
        msg_ident[i].innerHTML = nome.innerHTML
        horario[i].innerHTML = date + ' ' + '//'+ ' ' + time
    }
   

    msg_prof = document.querySelectorAll('.msg-resposta .msg-titulo-invertida h2')
    horario_prof = document.querySelectorAll('.msg-resposta .msg-titulo-invertida h3')


    msg_prof[0].innerHTML = "'Professor'"
    horario_prof[0].innerHTML = '2021-11-26 // 14:6:59'

    for (var i=1; i<msg_ident.length; i++) {
        msg_prof[i].innerHTML = "'Professor'"
        horario_prof[i].innerHTML = date + ' ' + '//'+ ' ' + time
    }
})