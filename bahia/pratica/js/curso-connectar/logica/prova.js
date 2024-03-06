/*
  Crie um algoritimo que forneça nome e sobrenome de cada um dos 10 alunos de uma escola.

  O algoritimo tambem deve informar se o aluno foi aprovado (media das notas maior ou igual a 7) ou reprovado (media das notas menor que 7). */

const alunos = [
{
  nome: 'Victor',
  sobrenome: 'Daniel',
  nota: 7
},
{
  nome: 'Thamires',
  sobrenome: 'Oliveira',
  nota: 1
},
{
  nome: 'Isabella',
  sobrenome: 'Aguiar',
  nota: 10
},
{
  nome: 'Ana',
  sobrenome: 'Luiza',
  nota: 8
},
{
  nome: 'Isadora',
  sobrenome: 'Oliveira',
  nota: 4
},
{
  nome: 'Guilherme',
  sobrenome: 'Rios',
  nota: 9
},
{
  nome: 'Paulo',
  sobrenome: 'Santos',
  nota: 8
},
{
  nome: 'Marcos',
  sobrenome: 'Vinicios',
  nota: 6
},
{
  nome: 'Renan',
  sobrenome: 'Vinicios',
  nota: 0
},
{
  nome: 'Pedro',
  sobrenome: 'Henrique',
  nota: 9
},
];
console.clear();

function ListaDeAlunos(i) {
  alunos.map((lista) => {
    return console.log(
      `${lista.nome} ${lista.sobrenome} Nota: ${lista.nota} Situação: ${lista.nota < 7 ? 'Reprovado' : 'Aprovado'}`)
  });
  
}

ListaDeAlunos();