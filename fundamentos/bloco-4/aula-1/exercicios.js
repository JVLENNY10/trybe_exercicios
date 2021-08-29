//-----------------------------------------------------------------------------------------------------------------------------------------//

// Variáveis:

// 1) Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).

const myName = "João"

// 2) Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.

const birthCity = "Rio de Janeiro"

// 3) Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.

let birthYear = 2002

// 4) Utilize o console.log() para imprimir as constantes e variáveis que você criou.

console.log(myName + ", " + birthCity + ", " + birthYear)

// 5) Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!

birthYear = 2030
console.log(birthYear)

// 6) Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

birthCity = "São Paulo";
console.log(birthCity);

// O erro ocorre porque não se pode alterar o valor de uma constante.

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas:

// Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

// 1) Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.

const base = 5
let height = 8

// 2) Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!

const area = base * height
console.log(area)

// 3) Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

const perimeter = base * 2 + height * 2
console.log(perimeter)

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Condições If e Else:

// 1) Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

const note = 90

// 2) Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

// ◉ Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"

// ◉ Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"

// ◉ Se a nota for menor que 60, imprima "Você foi reprovada(o)"

if (note >= 80) {
  console.log("Parabéns, você foi aprovada(o)!")
} else if (note < 80 || note === 60) {
  console.log("Você está na nossa lista de espera.")
} else {
  console.log("Você foi reprovada(o).")
}

// 3) Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

if (note >= 80) {
  console.log("Aluno tem uma nota maior ou igual a 80.")
} else if (note < 80 || note === 60) {
  console.log("Aluno tem nota menor que 80 ou igual a 60.")
} else {
  console.log("Aluno tem nota abaixo de 60.")
}

// 4) Altere o valor da nota para verificar se as condições que você implementou funcionam;

note = 10;

if (note >= 80) {
  console.log("Aluno tem uma nota maior ou igual a 80.")
} else if (note < 80 || note === 60) {
  console.log("Você está na nossa lista de espera.")
} else {
  console.log("Você foi reprovada(o).")
}

// Observação: Não funciona porque não se pode alterar o valor de uma constante.

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Operadores lógicos:

// Operador AND.

// 1) Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

const currentHour = 20

// 2) Crie uma variável chamada "message" que, inicialmente, é uma string vazia.

let message = ""

// 3) Implemente condicionais para que:

// ◉ Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".

// ◉ Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".

// ◉ Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".

// ◉ Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".

// ◉ Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D"
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour > 11 && currentHour < 14) {
  message = "Hora do almoço!!!"
} else if (currentHour > 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado"
}

// 4) Agora imprima a variável message fora das suas condições.

console.log(message)

// Operador OR.

// 1) Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

let weekDay = "quarta-feira"

// 2) Implemente condicionais para que:

// ◉ Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".

// ◉ Se for algum dia de fim de semana, imprima "FINALMENTE, descando merecido UwU".

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
  console.log("FINALMENTE, descando merecido UwU")
}

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Switch e Case:

// 1) Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada';

let state = "aprovada"

// 2) Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica'.

switch (state) {
  case "aprovada":
    console.log(state)
    break
  case "lista":
    console.log(state)
    break
  case "reprovada":
    console.log(state)
    break
  default:
    console.log("não se aplica")
}

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Exercícios

// 1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 5
const b = 5

// ◉ Adição (a + b)
console.log(adicao = a + b)

// ◉ Subtração (a - b)
console.log(subtracao = a - b)

// ◉ Multiplicação (a * b)
console.log(multiplicacao = a * b)

// ◉ Divisão (a / b)
console.log(divisao = a / b)

// ◉ Módulo (a % b)
console.log(mod = a % b)

// 2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const number1 = 10
const number2 = 50

if (number1 > number2) {
  console.log(number1)
} else {
  console.log(number2)
}

// 3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const number1 = 10
const number2 = 50
const number3 = 100

if (number1 > number2 && number1 > number3) {
  console.log(number1)
} else if (number2 > number1 && number2 > number3) {
  console.log(number2)
} else {
  console.log(number3)
}

// 4) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const number = 10

if (number > 0) {
  console.log("positive")
} else if (number < 0) {
  console.log("negative")
} else {
  console.log("zero")
}

// 5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// ◉ Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// ◉ Um ângulo será considerado inválido se não tiver um valor positivo.

const v1 = 50
const v2 = 50
const v3 = 80

if (v1 < 0 || v2 < 0 || v3 < 0) {
  console.log("Erro! Valor inválido!")
} else if (v1 + v2 + v3 === 180) {
  console.log(true)
} else {
  console.log(false)
}

// 6) Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// ◉ Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// ◉ Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// ◉ Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pieces = ["king", "queen", "bishop", "horse", "tower", "pawn"]

let piece = "king".toLowerCase()

if (pieces.includes(piece)) {
  if (piece === "king") {
    console.log("Todas as direções(vertical, horizontal e diagonal), porém apenas uma casa por vez.")
  } else if (piece === "queen") {
    console.log("Todas as direções(vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.")
  } else if (piece === "bishop") {
    console.log("Move-se na diagonal, quantas casas quiser.")
  } else if (piece === "horse") {
    console.log("Move-se por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.")
  } else if (piece === "tower") {
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
  } else if (pice === "pawn") {
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.")
  }
} else {
  console.log("Erro! Peça inválida.")
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
  console.log("A")
} else if (note >= 80) {
  console.log("B")
} else if (note >= 70) {
  console.log("C")
} else if (note >= 60) {
  console.log("D")
} else if (note >= 50) {
  console.log("E")
} else {
  console.log("F")
}

// 8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

// ◉ Bonus: use somente um if.

const number1 = 10
const number2 = 25
const number3 = 35

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  console.log(true)
} else {
  console.log(false)
}

// 9) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

// ◉ Bonus: use somente um if.

const number1 = 15
const number2 = 20
const number3 = 30

if (number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1) {
  console.log(true)
} else {
  console.log(false)
}

// 10) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// ◉ Atente que, sobre o custo do produto, incide um imposto de 20%.

// ◉ Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// ◉ O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

//    ○ valorCustoTotal = valorCusto + impostoSobreOCusto

//    ○ lucro = valorVenda - valorCustoTotal (lucro de um produto)

//const custoTotal = 200.00 + ((20 * 100.00) / 100)

const venda = 500.00

if (custoTotal < 0 || venda < 0) {
  console.log("Valor inválido. Programa encerrado.")
} else {
  console.log("O lucro foi de R$" + (venda - custoTotal).toFixed(2))
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

let salarioBruto = 3000.00
let salarioFinal

if (salarioBruto <= 1556.94) {
  const aliquotaInss1 = (8.0 * salarioBruto) / 100
  salarioFinal = salarioBruto - aliquotaInss1
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  const aliquotaInss2 = (9.0 * salarioBruto) / 100
  salarioFinal = salarioFinal - aliquotaInss2
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  const aliquotaInss3 = (11.0 * salarioBruto) / 100
  salarioFinal = salarioBruto - aliquotaInss3
} else {
  const aliquotaInss4 = 570.88
  salarioFinal = salarioBruto - aliquotaInss4
}

if (salarioFinal >= 1903.99 && salarioFinal <= 2826.65) {
  const aliquotaIr2 = 7.5 * salarioFinal / 100 - 142.80
  salarioFinal = salarioFinal - aliquotaIr2
} else if (salarioFinal >= 2826.66 && salarioFinal <= 3751.05) {
  const aliquotaIr3 = 15.0 * salarioFinal / 100 - 354.80
  salarioFinal = salarioFinal - aliquotaIr3
} else if (salarioFinal >= 3751.06 && salarioFinal <= 4664.68) {
  const aliquotaIr4 = 22.5 * salarioFinal / 100 - 636.13
  salarioFinal = salarioFinal - aliquotaIr4
} else {
  const aliquotaIr5 = 27.5 * salarioFinal / 100 - 869.36
  salarioFinal = salarioFinal - aliquotaIr5
}

console.log("Seu salário final é: R$" + salarioFinal.toFixed(2))

//-----------------------------------------------------------------------------------------------------------------------------------------//