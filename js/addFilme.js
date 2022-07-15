import { Controller } from "./controller.js";

// Formulario
const form = document.querySelector('#formulario')
const controller = new Controller()

form.addEventListener('submit',  async (e)  => {
    e.preventDefault()

    const {
        nome, 
        categoria, 
        classificacao, 
        duracao,
        descricao,
        cartaz
    } = e.target

    let duracao_format = duracao.value.replace(':','h') + 'min'

    const novoFilme = {
        nome: nome.value,
        categoria: categoria.value,
        classificacao: +classificacao.value,
        duracao:  duracao_format,
        descricao: descricao.value,
        cartaz: cartaz.value
    }
    
    window.location.assign('/index.html')
    await controller.adicionaFilme(novoFilme)

    
})

