// 1) Crie uma função que recebe três parâmetros retorna uma Promise.

// - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro: (a + b) * c.
// - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo".
// - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const doEquation = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject('Informe apenas números.');
    }

    const result = (a + b) * c;

    if (result < 50) reject('Valor muito baixo.');

    return resolve(result);
  });

  return promise;
};

// 2) Escreva um código para consumir a função construída no exercício anterior.

// - Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1).
// - Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// - Utilize then e catch para manipular a Promise retornada pela função:
// -- Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// -- Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

// const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);
// const callDoEquation = () => {
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
//   doEquation(...randomNumbers)
//     .then((promise) => console.log(promise))
//     .catch((error) => console.log(error));
// };

// callDoEquation();

// 3) Reescreva o código do exercício anterior para que utilize async/await.

// - Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);
const callDoEquation = async () => {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  try {
    const result = await doEquation(...randomNumbers);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

callDoEquation();

// 4) Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.

// - Você pode utilizar then e catch, async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.

const fs = require('fs').promises;

// - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id-Nome. Por exemplo: 1-Homer Simpson.

const printPersonage = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf8');
  const personages = JSON.parse(fileContent);
  return personages.map((personage) => console.log(`${personage.id}-${personage.name}`));
};

printPersonage();

// - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja um personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const getPersonageId = async (id) => {
  const personages = await fs.readFile('./simpsons.json', 'utf8')
    .then((fileContent) => JSON.parse(fileContent));

  const containId = personages.find((personage) => personage.id === id);
  if (!containId) throw new Error('id não encontrado.');

  return console.log(containId);
};

getPersonageId('10');

// - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const changeFile = async () => {
  const personages = await fs.readFile('./simpsons.json', 'utf8')
    .then((fileContent) => JSON.parse(fileContent));

  const newPersonagesList = personages.filer((personage) => personage.id !== 4 || personage.id !== 10);

  const personages = await fs.writeFile('./simpsons1.json', newPersonagesList, { flag: 'w' })
    .then(() => console.log('Salvo!'));
};

changeFile();

// - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
// - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
// - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.



// const fs = require('fs').promises;

// async function getSimpsonById() {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

//   const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

//   if (!chosenSimpson) {
//     /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
//      * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
//      * tendo como motivo o que passarmos para o `throw`.
//      * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
//      */
//     throw new Error('id não encontrado');
//   }

//   /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
//    * `return` aciona o fluxo de sucesso e resolve a Promise.
//    * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
//    * dentro do executor de uma Promise.
//    */
//   return chosenSimpson;
// }


// console.log(getSimpsonById());
