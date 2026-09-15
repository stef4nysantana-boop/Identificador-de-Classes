export class Funcionario extends Pessoa {

        constructor(nome, cpf, id_funcionario, matriculaFuncionario, cargo){
            
            super(nome, cpf);
            this.id_funcionario = id_funcionario;
            this.matriculaFuncionario = matriculaFuncionario;
            this.cargo = cargo
        }

        exibirDados(){
            super.exibirDados();
            console.log("Id Funcionario:", this.id_funcionario);
            console.log("Matricula do Funcionario", this.matriculaFuncionario);
            console.log("Cargo:", this.cargo);
        }
}