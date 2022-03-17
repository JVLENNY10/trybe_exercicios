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
