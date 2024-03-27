
//Aula 1 (Algorítmos e estrutura de dados)

console.clear();  //Limpar console

console.log('Olá');  //string

console.log(5 > 8);  //boolean

console.log(5); //number

function Legal() {    //função sempre tem que retornar
   return console.log('meu nome e guilherme')
};

Legal(); //usar função


var name = 40  //variavel

let nome = {   //variavel com objetos
    idade: 30  //objeto idade =30
}

console.log(nome.idade)  //procurando o objeto idade
console.log(name) //mostrando variavel

console.clear()
//aula 2 (Operadores relacionais)

let a = '2' //variavel string 2
let b = 2 //variaveç number 2

let res = a == b  //variavel verificando se 'a' e = 'b'

let res2 = a === b //variavel verifica se o tipo e igual

let res3 = a != b //verifica se o valor e diferente

let res4 = a !== b //verifica se o tipo e diferente

let res5 = a < b //verifica se 'a' e menor que 'b'

let res6 = a > b //verifica se 'a' e maior que 'b'

let res7 = a <= b //verifica se 'a' e menor ou igual 'b'

let res8 = a >= b //verifica se 'a' e maior ou igual 'b'

let c = 4
let d = 5

let res9 = (c <= d ? 'Sim' : 'Não') //faz uma pergunta, da a resposta
//ou
let res1

if(c <= d) {  //criando uma informação  
    res1 = 'Sim' //se for verdadeiro    //atribui o valor a variavel 'res1'
} else {  //'else' = caso contrario
    res1 = 'Não' //se for falso
}

console.log(res9) //mostrar resultado da 'res' no console

console.clear()

/* 

        aula 3 (Operadores aritméticos e operadores de atribuição)
[aritimetca]
(+)adicão
(-)subtração
(*)multiplicação
(/)divisão
(**)potencia [exemplo 2 ** 2 = 2 elevado a 2]
(%)resto [exemplo 10 % 4 4+4= 8 sobra 2, entao 10 % 4 = 2]

[atribuição]
(=)atribuir [exemplo: let ex = 13]
(+=)atribir ela e ela mesma [exemplo: let ex = ex, vira let ex +=]
(-=)subitrair ela por ela mesma [observação: se vc ja delarou a var apenas use o nome dela sel let ou var]
(/=)dividir ela mesma
(*=)multiplicar ela por ela mesma
(**=)potencia ela por ela mesma
(%=)calcular o resto dela mesma
*/

//aula 4 operadores logicos

let num1 = 5
let num2 = 10
let num3 = 0

if(num1 > 3 && num2 > 8) { //se as duas condiçoes forem verdadeiras ao mesmo tempo 
    num3 = 100  //este codigo sera executado
}

if(num1 < 3 || num2 > 8) { //se as uma das condiçoes forem verdadeiras
    num4 = 200  //este codigo sera executado
}

/*
se eu usar a ! () assim '!(num1 > 3)' eu estou negando a condição ou tonando-a falsa

*/


console.log(num4)
console.clear()

//aula 7 (operador de incremento/descremento e variaveis)

let incremento = 0;

incremento++ // almenta o valor da var e 1
incremento++
incremento-- // descrementar ou retirar 1

//cronometro em js
setInterval(() => {
    incremento++
    console.log()//<=== incremento
}, 1000);

/*
variaveis:

(var) so pode ser assesada de onde foi criada, poder mudar o valor
(let) pode ser assesada em qualquer lugar, pode mudar o valor
(const) so pode ser assesada de onde foi criada, nao muda o valor

dica: se uma function esta em uma variavel ela so poder ser executada colocando seu nome e () na frente.
*/

console.log(incremento)
console.clear()

//aula 08 (estruturas de controle sequancial, condicional e de repetição)

function verificaridade(idade) { 
    if(idade >= 13) {
        console.log('Pode acessar o site!')
    } else if (idade === 12){  //usar else if faz com que vc use mais de 2 parametros
        console.log('falta apenas 1 ano!')
    } else {
        console.log('Você não pode acessar este site!')
    }
}

verificaridade(13)
console.clear()

let notas = [5, 8, 7, 9] //o [] serve para adicionar varios valores a mesma variavel
let estudo = 1.3

function escola() {
    for(let i=0; i < notas.length; i++){
        console.log(notas[0] * estudo); //multiplicar valores
    }
}

escola()

console.clear()

//-----------------
//escrever na tela

document.write('TEXTO')


//pop UP

alert('texto')
confirm('TEXTO')

console.clear()

//para pegar o valor do input
/*
HTML=
<!--<input id="textinput" type="text" placeholder="Nome"> //input
  <button onclick="envia()">Confirmar</button> //botao que iniciara a função

JavaScript=
function envia() { //função
    var valor = document.getElementById('textinput').value; //a var valor vai ser igual a o value digitado no input
    document.write('Seja bem vindo ' + valor) //mostrar o resultado na tela
} */

//função que e ativada assim que abrimos a pagina

window.onload = function name(params) {
    //função
}