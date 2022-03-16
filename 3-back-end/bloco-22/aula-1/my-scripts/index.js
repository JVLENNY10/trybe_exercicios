const readline = require('readline-sync');

// 8) Crie um arquivo index.js que pergunta qual script deve ser executado.

// - O script deve ser acionado através do comando npm start.
// - Utilize o readline-sync para realizar o input de dados.
// - Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
// - Ao digitar o número de um script e pressionar enter, o script deve ser executado.
// - Você pode utilizar o require para executar o script em questão.

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular VM', script: './velocidade.js' },
  { name: 'Realizar Sorteio', script: './sorteio.js' },
];

scripts.map((script, index) => console.log(`${1 + index}-${script.name}`));

const selectScript = readline.questionInt('Selecione o número do script desejado: ') - 1;

const script = scripts[selectScript];

if (!script) return console.log('Esse script não existe. Saindo.')

require(script.script);
