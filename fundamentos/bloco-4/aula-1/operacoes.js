//-----------------------------------------------------------------------------------------------------------------------------------------//

// Condições If e Else:

// 1) Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

const note = 90;

// 2) Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

// ◉ Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"

// ◉ Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"

// ◉ Se a nota for menor que 60, imprima "Você foi reprovada(o)"

if (note >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (note < 80 || note === 60) {
  console.log("Você está na nossa lista de espera.");
} else {
  console.log("Você foi reprovada(o).");
}

// 3) Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

if (note >= 80) {
  console.log("Aluno tem uma nota maior ou igual a 80.");
} else if (note < 80 || note === 60) {
  console.log("Aluno tem nota menor que 80 ou igual a 60.");
} else {
  console.log("Aluno tem nota abaixo de 60.");
}

// 4) Altere o valor da nota para verificar se as condições que você implementou funcionam;

note = 10;

if (note >= 80) {
  console.log("Aluno tem uma nota maior ou igual a 80.");
} else if (note < 80 || note === 60) {
  console.log("Você está na nossa lista de espera.");
} else {
  console.log("Você foi reprovada(o).");
}

// Observação: Não funciona porque não se pode alterar o valor de uma constante.

//-----------------------------------------------------------------------------------------------------------------------------------------//