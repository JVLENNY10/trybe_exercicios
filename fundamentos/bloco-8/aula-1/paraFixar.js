//-----------------------------------------------------------------------------------------------------------------------------------------//

// 1) Crie uma função que retorne a string 'Acordando!!';

const timeToWakeUp = () => 'Acordando';

// 2) Crie outra função que retorne a string 'Bora tomar café!!';

const coffeeTime = () => 'Bora tomar café!!';

// 3) Crie mais uma função que retorne a string 'Partiu dormir!!';

const timeToSleep = () => 'Partiu dormir!!';

// 4) Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

// Exemplo:
// Ao chamar a função doingThings:
// doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const doingThings = parameter => parameter;

console.log(doingThings(timeToWakeUp()));
console.log(doingThings(coffeeTime()));
console.log(doingThings(timeToSleep()));
