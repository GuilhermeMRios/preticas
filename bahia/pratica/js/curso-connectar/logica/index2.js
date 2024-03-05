/* Crie um algoritimo que informe o valor do salario reajustado de acordo as seguntes condições:

    - Salarios menores que R$ 2.000,00 reajuste de 10%; 2000 x 1,1    
    - Salario entre R$ 2.000,00 e R$ 5.000,00 reajuste de 8%; 1.08
    - salarios maiores que R$ 5.000,00 reajuste de 6%; 1.06     */

function reajuste(salario) {
  let escrita =
    "o funcionario que ganhava R$ " + salario + " agora ganha " + "R$ ";
  if (salario < 2000) {
    salario = escrita + salario * 1.1;
  }
  if (salario >= 2000 && salario < 5000) {
    salario = escrita + salario * 1.08;
  }
  if (salario > 5000) {
    salario = escrita + salario * 1.06;
  }
  console.clear()
  console.log(salario);
}
reajuste(2200);
