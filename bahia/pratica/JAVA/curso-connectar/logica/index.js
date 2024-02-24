
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
