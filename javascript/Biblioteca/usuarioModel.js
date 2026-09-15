export class Usuario extends Pessoa {

    constructor(nome, cpf, id_usuario, matriculaUsuario){

        super(nome, cpf);
        this.id_usuario = id_usuario;
        this.matriculaUsuario = matriculaUsuario;
    }

    exibirDados(){
        super.exibirDados();
        console.log("Id Usuario:", this.id_usuario);
        console.log("Matricula do Usuario:", this.matriculaUsuario);
    }
}