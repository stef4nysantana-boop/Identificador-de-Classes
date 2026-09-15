import { Biblioteca } from "./BibliotecaModel.js";
import { Livro } from "./livroModel.js";
import { Pessoa } from "./pessoaModel.js";
import { Usuario } from "./usuarioModel.js";
import { Funcionario } from "./funcionarioModel.js";
import { Emprestimo } from "./emprestimoModel.js";

const bibliotecaCentral = new Biblioteca(1, "Biblioteca Central");

const domCasmurro = new Livro(1, "Dom Casmurro", 978000000001, 1899);

const maria = new Usuario("Maria Souza", 11111111111, 1, "U001");

const carlos = new Funcionario("Carlos Lima", 33333333333, 1, "F001", "Bibliotecario");

const emprestimo1 = new Emprestimo(1, "15/09/2026", "01/09/2026");



// hora do testeasda

console.log("--- Biblioteca:");
bibliotecaCentral.exibirDados();

console.log("--- Livro:");
domCasmurro.exibirDados();

console.log("--- Usuario:");
maria.exibirDados();

console.log("--- Funcionario:");
carlos.exibirDados();

console.log("--- Emprestimos:");
emprestimo1.exibirDados();
