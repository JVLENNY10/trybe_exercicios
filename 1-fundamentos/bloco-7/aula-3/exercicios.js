//-----------------------------------------------------------------------------------------------------------------------------------------//

// (1)
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// (2)
function myRemove(arr, item) {
  let newArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }

  return newArr;
}

// (3)
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;

  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';

  if (num % 3 === 0) return 'fizz';

  if (num % 5 === 0) return 'buzz';

  return num;
}

// (4)
function encode(phrase) {
  for (let index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replace('a', '1');
    phrase = phrase.replace('e', '2');
    phrase = phrase.replace('i', '3');
    phrase = phrase.replace('o', '4');
    phrase = phrase.replace('u', '5');
  }

  return phrase;
}

function decode(phrase) {
  for (let index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replace('1', 'a');
    phrase = phrase.replace('2', 'e');
    phrase = phrase.replace('3', 'i');
    phrase = phrase.replace('4', 'o');
    phrase = phrase.replace('5', 'u');
  }

  return phrase;
}

// 5) A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

// {
//   tech: 'nomeTecnologia',
//   name: name,
// }

// Implemente a função techList.

function techList(technology, yourName) {
  let techs = 'Vazio!';

  if (Array.isArray(technology) && technology.length > 0) {
    techs = [];
    for (let item of technology.sort()) {
      techs.push({ tech: item, name: yourName });
    }
  } else if (!Array.isArray(technology)) {
    techs = { tech: technology, name: yourName };
  }

  return techs;
}

// 6) A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

// string recebida
// '1 cerveja'
// retorno da função
// '1 copo de água'

// string recebida
// '1 cerveja, 2 shots e 1 catuaba'
// retorno da função
// '4 copos de água'

// string recebida
// '2 caipirinhas'
// retorno da função
// '2 copos de água'

// Implemente a função hydrate.

function hydrate(drinks) {
  let water = 0;

  for (let number of drinks) {
    if (number.match(/\d/) != null) {
      water += parseInt(number, drinks);
    }
  }

  if (water === 1) {
    water = `${water} copo de água`;
  } else {
    water = `${water} copos de água`;
  }

  return water;
}

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
};

//-----------------------------------------------------------------------------------------------------------------------------------------//