export class Livro {

    constructor(id_livro, titulo, isbn, anoPublicacao){

        this.id_livro = id_livro;
        this.titulo = titulo;
        this.isbn = isbn;
        this.anoPublicacao = anoPublicacao;
    }

    exibirDados() {

        console.log("Id Livro:", this.id_livro);
        console.log("Titulo:", this.titulo);
        console.log("ISBN:", this.isbn);
        console.log("Ano de Publicação:", this.anoPublicacao);
    }

}