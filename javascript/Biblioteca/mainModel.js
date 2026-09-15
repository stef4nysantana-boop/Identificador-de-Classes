import { Biblioteca } from "./BibliotecaModel";
import { Livro } from "./livroModel";
import { Usuario } from "./usuarioModel";
import { Funcionario } from "./funcionarioModel";
import { Emprestimo } from "./emprestimoModel";

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
