const readline = require('readline-sync');

// 7) Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado.

// - O script deve ser executado através do comando npm run sorteio.
// - Utilize o readline-sync para realizar input de dados.
// - Armazene o script em sorteio.js.
// - O número gerado deve ser um inteiro entre 0 e 10.
// - Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
// - Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
// - Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.

const sweepstake = (guess) => {
  const sweepstakeResult = (Math.random() * 10).toFixed(0);
  if (guess === sweepstakeResult) return console.log('Parabéns, número correto!');
  return console.log(`Opa, não foi dessa vez. O número era ${sweepstakeResult}.`);
};

const runGame = () => {
  const guess = readline.questionInt('Qual o seu palpite(0 a 10)? ');
  sweepstake(guess);
  const replaySweepstake = readline.question('Deseja realizar o sorteio novamente(s para sim e qualquer coisa para não)? ');
  if (replaySweepstake !== 's') return console.log('Até a próxima!');
  runGame();
};

runGame();
