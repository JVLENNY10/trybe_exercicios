//-----------------------------------------------------------------------------------------------------------------------------------------//

// Para Fixar I

// 1) Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar.Faça uma função chamada fruitSalad 
// passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada 
// de frutas usando o spread.

const specialFruit = ['banana', 'uva', 'manga'];

const additionalItens = ['aveia', 'granola', 'calda'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Para Fixar II

// 1) Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, realizaSaudacao] = saudacoes;

realizaSaudacao(saudacao);

// 2) A seguir, temos alguns valores que estão descritos em variáveis incoerentes.Através da desestruturação de arrays, corrija os valores 
// das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const array = ['arroz', 'gato', 'agua'];
[comida, animal, bebida] = array;

console.log(comida, animal, bebida);

// 3) O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir.Através de array destructuring, faça com 
// que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

[, , , ...numerosPares] = numerosPares;

console.log(numerosPares);

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Para Fixar IV

// 1) Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined.Ajuste a função GetNationality 
// para que a chamada GetNationality(person) retorne João is Brazilian.

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Para Fixar V

// 1) Altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude
});

console.log(getPosition(-19.8157, -43.9542));

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Para Fixar VI
// 1) Escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso 
// não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));

//-----------------------------------------------------------------------------------------------------------------------------------------//