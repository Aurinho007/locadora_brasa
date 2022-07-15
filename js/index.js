import { Controller } from "./controller.js";

// Formulario
const form = document.querySelector('#formulario')
const controller = new Controller()
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const {
        nome, 
        categoria, 
        classificacao, 
        duracao,
        descricao,
        cartaz
    } = e.target
    const novoFilme = {
        nome: nome.value,
        categoria: categoria.value,
        classificacao: classificacao.value,
        duracao: duracao.value,
        descricao: descricao.value,
        cartaz: cartaz.value
    }
    console.log(novoFilme)
    controller.adicionaFilme(novoFilme)
})

// testando controller
// controller.buscaFilmes()
// // controller.buscaPorID(2)
// const botao = document.querySelector('.adiciona')
// botao.addEventListener('click', (e) => {
//     controller.adicionaFilme({
//         "nome": "Frozen",
//         "categoria": "Aventura",
//         "classificacao": "Livre",
//         "duracao": "1h:40min",
//         "descricao": "Uma nova aventura na neve",
//         "cartaz": "",
//     })
    
// })