export class Biblioteca {

    constructor(id_biblioteca, nome){

        this.id_biblioteca = id_biblioteca;
        this.nome = nome;
    }

    exibirDados(){

        console.log("Id da Biblioteca:", this.id_biblioteca);
        console.log("Nome da Biblioteca:", this.nome);
    }
}