//-----------------------------------------------------------------------------------------------------------------------------------------//

// Funções

// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// 1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 5;
const b = 5;

// ◉ Adição (a + b)
console.log(adicao = a + b);

// ◉ Subtração (a - b)
console.log(subtracao = a - b);

// ◉ Multiplicação (a * b)
console.log(multiplicacao = a * b);

// ◉ Divisão (a / b)
console.log(divisao = a / b);

// ◉ Módulo (a % b)
console.log(mod = a % b);

// Função

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 5));

// 2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const number1 = 10;
const number2 = 50;

if (number1 > number2) {
  console.log(number1);
} else {
  console.log(number2);
}

// Função

// 3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const number1 = 10;
const number2 = 50;
const number3 = 100;

if (number1 > number2 && number1 > number3) {
  console.log(number1);
} else if (number2 > number1 && number2 > number3) {
  console.log(number2);
} else {
  console.log(number3);
}

// 4) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const number = 10

if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// 5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// ◉ Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// ◉ Um ângulo será considerado inválido se não tiver um valor positivo.

const v1 = 50;
const v2 = 50;
const v3 = 80;

if (v1 < 0 || v2 < 0 || v3 < 0) {
  console.log("Erro! Valor inválido!");
} else if (v1 + v2 + v3 === 180) {
  console.log(true);
} else {
  console.log(false);
}

// 6) Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// ◉ Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// ◉ Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// ◉ Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pieces = ["king", "queen", "bishop", "horse", "tower", "pawn"];

let piece = "king".toLowerCase();

if (pieces.includes(piece)) {
  if (piece === "king") {
    console.log("Todas as direções(vertical, horizontal e diagonal), porém apenas uma casa por vez.");
  } else if (piece === "queen") {
    console.log("Todas as direções(vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
  } else if (piece === "bishop") {
    console.log("Move-se na diagonal, quantas casas quiser.");
  } else if (piece === "horse") {
    console.log("Move-se por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.");
  } else if (piece === "tower") {
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
  } else if (pice === "pawn") {
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.");
  }
} else {
  console.log("Erro! Peça inválida.");
}

// 7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// ◉ Porcentagem >= 90 -> A

// ◉ Porcentagem >= 80 -> B

// ◉ Porcentagem >= 70 -> C

// ◉ Porcentagem >= 60 -> D

// ◉ Porcentagem >= 50 -> E

// ◉ Porcentagem < 50 -> F

// ◉ O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let note = 100

if (note >= 90) {
  console.log("A");
} else if (note >= 80) {
  console.log("B");
} else if (note >= 70) {
  console.log("C");
} else if (note >= 60) {
  console.log("D");
} else if (note >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// 8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

// ◉ Bonus: use somente um if.

const number1 = 10;
const number2 = 25;
const number3 = 35;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// 9) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

// ◉ Bonus: use somente um if.

const number1 = 15;
const number2 = 20;
const number3 = 30;

if (number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1) {
  console.log(true);
} else {
  console.log(false);
}

// 10) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// ◉ Atente que, sobre o custo do produto, incide um imposto de 20%.

// ◉ Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// ◉ O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

//    ○ valorCustoTotal = valorCusto + impostoSobreOCusto

//    ○ lucro = valorVenda - valorCustoTotal (lucro de um produto)

//const custoTotal = 200.00 + ((20 * 100.00) / 100)

const venda = 500.00;

if (custoTotal < 0 || venda < 0) {
  console.log("Valor inválido. Programa encerrado.");
} else {
  console.log("O lucro foi de R$" + (venda - custoTotal).toFixed(2));
}

// 11) Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// Notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// ◉ INSS (Instituto Nacional do Seguro Social)

//    ○ Salário bruto até R$ 1.556,94: alíquota de 8%

//    ○ Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

//    ○ Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

//    ○ Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// ◉ IR (Imposto de Renda)

//    ○ Até R$ 1.903,98: isento de imposto de renda

//    ○ De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

//    ○ De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

//    ○ De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

//    ○ Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

// ◉ O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// ◉ Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// ◉ Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

//    ○ R$ 2.670,00: salário com INSS já deduzido;

//    ○ 7.5%: alíquota de imposto de renda;

//    ○ R$ 142,80 parcela a se deduzir do imposto.

// ◉ Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

// ◉ O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// ◉ Resultado: R$ 2.612,55.

// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

let salarioBruto = 3000.00;
let salarioFinal;

if (salarioBruto <= 1556.94) {
  const aliquotaInss1 = (8.0 * salarioBruto) / 100;
  salarioFinal = salarioBruto - aliquotaInss1;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  const aliquotaInss2 = (9.0 * salarioBruto) / 100;
  salarioFinal = salarioFinal - aliquotaInss2;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  const aliquotaInss3 = (11.0 * salarioBruto) / 100;
  salarioFinal = salarioBruto - aliquotaInss3;
} else {
  const aliquotaInss4 = 570.88;
  salarioFinal = salarioBruto - aliquotaInss4;
}

if (salarioFinal >= 1903.99 && salarioFinal <= 2826.65) {
  const aliquotaIr2 = 7.5 * salarioFinal / 100 - 142.80;
  salarioFinal = salarioFinal - aliquotaIr2;
} else if (salarioFinal >= 2826.66 && salarioFinal <= 3751.05) {
  const aliquotaIr3 = 15.0 * salarioFinal / 100 - 354.80;
  salarioFinal = salarioFinal - aliquotaIr3;
} else if (salarioFinal >= 3751.06 && salarioFinal <= 4664.68) {
  const aliquotaIr4 = 22.5 * salarioFinal / 100 - 636.13;
  salarioFinal = salarioFinal - aliquotaIr4;
} else {
  const aliquotaIr5 = 27.5 * salarioFinal / 100 - 869.36;
  salarioFinal = salarioFinal - aliquotaIr5;
}

console.log("Seu salário final é: R$" + salarioFinal.toFixed(2));

//-----------------------------------------------------------------------------------------------------------------------------------------//