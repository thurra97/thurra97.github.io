document.addEventListener('DOMContentLoaded', function() {

    dias = document.querySelector('.dias')
    rotinas = document.querySelector('.coluna_itens_3 h2')

    aux = false
    rotinas.addEventListener('click', function(event) {
        if (aux){
            dias.style.display = 'none'
            aux = false
        }
        else{
            dias.style.display = 'flex'
            aux = true
        }
        
        event.preventDefault()
    })


    img = document.querySelector('.linha_header_2 img')
    img.src = localStorage.getItem('src')

    nome = document.querySelector('h1')
    nome.innerHTML = localStorage.getItem('nome')

    linha_nome = document.querySelector('.linha_nome')

    if (nome.innerHTML === 'Arthur Motta Gomes') {
        linha_nome.style.padding = '2rem 0rem 3rem 20rem';
    }
    if (nome.innerHTML === 'Gabriel Valentim') {
        linha_nome.style.padding = '2rem 0rem 3rem 15rem';
    }
    if (nome.innerHTML === 'Enzo Fonteyne') {
        linha_nome.style.padding = '2rem 0rem 3rem 13rem';
    }
    if (nome.innerHTML === 'Enzo D. L. Zamberlan') {
        linha_nome.style.padding = '2rem 0rem 3rem 23rem';
    }

    title = document.querySelector('title')
    title.innerHTML = nome.innerHTML
})