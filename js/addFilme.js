import { Controller } from "./controller.js";

// Formulario
const form = document.querySelector("#formulario");
const controller = new Controller();

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { nome, categoria, classificacao, duracao, descricao, cartaz } =
        e.target;

    let duracao_format = duracao.value.replace(":", "h") + "min";

    const novoFilme = {
        nome: nome.value,
        categoria: categoria.value,
        classificacao: +classificacao.value,
        duracao: duracao_format,
        descricao: descricao.value,
        cartaz: cartaz.value,
    };

    await controller
        .adicionaFilme(novoFilme)
        .then(() => window.location.assign("/index.html"));
});

//formulário chique

document.querySelectorAll(".input").forEach((element) => {
    element.addEventListener("blur", (event) => {
        if (event.target.value != "") {
            event.target.nextElementSibling.classList.add("filled");
            console.log(event.target.nextElementSibling.classList)
        } else {
            event.target.nextElementSibling.classList.remove("filled");
        }
    });
});

