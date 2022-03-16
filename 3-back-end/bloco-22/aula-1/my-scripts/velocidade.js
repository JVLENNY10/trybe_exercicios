const readline = require('readline-sync');

// 6) Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida.

// - A fórmula para calcular velocidade média é distância/tempo.
// - Armazene o script no arquivo velocidade.js.
// - Agora, permita que o script seja executado através do comando npm run velocidade. Para isso, crie a chave velocidade dentro do objeto scripts no package.json.
// - Utilize o readline-sync para solicitar os dados à pessoa.
// - Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.

const calcVM = (distance, time) => distance/time;
console.log(`A VM é: ${calcVM(100, 30)}`);
