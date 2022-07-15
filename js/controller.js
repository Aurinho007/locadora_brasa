export class Controller {

    filmeElement;
    filmes;
    constructor() {
        this.filmeElement = document.getElementById('filmes')
    }
    
    buscaFilmes() {
        return fetch('http://localhost:3000/filmes')
            .then(res => res.json())
            .then(filmes => filmes)
    }

    buscaPorID(id) {
        fetch(`http://localhost:3000/filmes/${id}`)
            .then(res => res.json())
            .then(filme => console.log(filme))
    }

    adicionaFilme(filme) {
        fetch("http://localhost:3000/filmes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filme)
        }).then(res => alert(res))
    }

    deletaFilme(id) {
        fetch(`http://localhost:3000/filmes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => alert(res))
    }

}