export class Pessoa {

    constructor(nome, cpf) {

        this.nome = nome
        this.cpf = cpf
    }

    exibirDados(){

        console.log("Nome:", this.nome);
        console.log("Cpf:", this.cpf);
    }
}