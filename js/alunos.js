document.addEventListener('DOMContentLoaded', function() {

    as = document.querySelectorAll('.linha_itens')

    for (a of as) {

        a.addEventListener('click', function(event) {

            // Obtém o elemento que foi clicado. Não podemos
            // usar a variável "a" diretamente aqui dentro,
            // pois o valor dela muda ao longo do loop.
            t = event.currentTarget

            h2 = t.querySelector('.linha_itens .linha_nome h2 a')
            localStorage.setItem('nome', h2.innerHTML)

            img = t.querySelector('.linha_itens img')
            localStorage.setItem('src', img.src)

        })

    }

})
