const botaoRegistrar = document.querySelector('.btn-registrar')

botaoRegistrar.addEventListener('click', function () {
    const formulario = document.querySelector(".posicao-formulario")

    console.log(formulario.classList)

    if (formulario.classList[1] !== "ativo") {
        formulario.classList.add("ativo")
    }
})

const botaoFechar = document.querySelector('.btn-fechar')

botaoFechar.addEventListener('click', function () {
    const formulario = document.querySelector(".posicao-formulario")

    console.log(formulario.classList)

    if (formulario.classList[1] === "ativo") {
        formulario.classList.remove("ativo")
    }
})

let camposFormulario = document.querySelectorAll(".campo")
let botaoEnviar = document.querySelector(".btn-enviar")

botaoEnviar.addEventListener('click', function (e) {
    e.preventDefault()

    camposFormulario.forEach((input) => {
        if (input.value) {
            input.classList.add('preenchido')
            input.classList.remove('vazio')
            input.nextElementSibling.classList.remove('mostrar')
        } else {
            input.classList.remove('preenchido')
            input.classList.add('vazio')
            input.nextElementSibling.classList.add('mostrar')
        }
    })
})

