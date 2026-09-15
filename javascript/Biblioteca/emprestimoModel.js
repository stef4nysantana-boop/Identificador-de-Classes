export class Emprestimo {

    constructor(id_emprestimo, dataDevolucao, dataEmprestimo){

        this.id_emprestimo = id_emprestimo;
        this.dataDevolucao = dataDevolucao;
        this.dataEmprestimo = dataEmprestimo;
    }

    exibirDados(){

        console.log("id_emprestimo:", this.id_emprestimo);
        console.log("Data de devolução:", this.dataDevolucao);
        console.log("Data de emprestimo:", this.dataEmprestimo);
    }

    
}