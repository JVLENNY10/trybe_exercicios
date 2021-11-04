//-----------------------------------------------------------------------------------------------------------------------------------------//

// Parte I - Objetos e For/In

// Usando o objeto abaixo, faça os exercícios a seguir:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// 1) Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

// Bem-vinda, Margarida

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem vinda, ${info.personagem}`);

// 2) Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

// {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// }

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'sim';
console.log(info);

// 3) Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// personagem
// origem
// nota
// recorrente

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

for (let key in info) {
  console.log(key);
}

// 4) Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

for (let key in info) {
  console.log(info[key]);
}

// 5) Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info1 = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info1, info2) {
  if (info1[key] !== info2[key]) {
    console.log(`${info1[key]} e ${info2[key]}`);
  } else {
    console.log('Ambos recorrentes');
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Parte II - Funções

// 1) Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// ◉ Exemplo de palíndromo: arara .
// ◉ verificaPalindrome('arara') ;
// ◉ Retorno esperado: true
// ◉ verificaPalindrome('desenvolvimento') ;
// ◉ Retorno esperado: false

function checkPalindrome(string) {
  let inverse = string.split('').reverse().join('');

  if (inverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome('arara'));
console.log(checkPalindrome('desenvolvimento'));

// 2) Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// ◉ Array de teste: [2, 3, 6, 7, 10, 1]; .
// ◉ Valor esperado no retorno da função: 4 .

function positionNumberMax(arrayNumbers) {
  let maxNumber = Math.max.apply(null, arrayNumbers);

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === maxNumber) {
      return index;
    }
  }
}

console.log(positionNumberMax([2, 3, 6, 7, 10, 1]));

// 3) Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// ◉ Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// ◉ Valor esperado no retorno da função: 6 .

function positionNumberMin(arrayNumbers) {
  let minNumber = Math.min.apply(null, arrayNumbers);

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === minNumber) {
      return index;
    }
  }
}

console.log(positionNumberMin([2, 4, 6, 7, 10, 0, -3]));

// 4) Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// ◉ Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// ◉ Valor esperado no retorno da função: Fernanda .

function biggestName(arrayNames) {
  let result = arrayNames[0];

  for (let name of arrayNames) {
    if (name.length > result.length) {
      result = name;
    }
  }

  return result;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5) Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// ◉ Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// ◉ Valor esperado no retorno da função: 2 .

function numberThatRepeatsTheMost(arrayNumbers) {
  let count = 0;
  let result = 0;
  let finalCount = count;

  for (let number of arrayNumbers) {
    count = 0;
    for (let numberCount of arrayNumbers) {
      if (numberCount === number) {
        count += 1;
      }
    }
    if (count > finalCount) {
      finalCount = count;
      result = number;
    }
  }

  return result;
}

console.log(numberThatRepeatsTheMost([2, 3, 2, 5, 8, 2, 3]));

// 6) Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

// ◉ Valor de teste: N = 5 .
// ◉ Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function sumNumbers(number) {
  let result = 0;

  for (let index = 0; index <= number; index += 1) {
    result += index;
  }

  return result;
}

console.log(sumNumbers(5));

// 7) Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

// ◉ Valor de teste: 'trybe' e 'be'
// ◉ Valor esperado no retorno da função: true
// ◉ verificaFimPalavra('trybe', 'be') ;
// ◉ Retorno esperado: true
// ◉ verificaFimPalavra('joaofernando', 'fernan') ;
// ◉ Retorno esperado: false

function checkEndOfWord(word, ending) {
  if (word.slice(-ending.length) === ending) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEndOfWord('trybe', 'be'));
console.log(checkEndOfWord('joaofernando', 'fernan'));

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Bônus

// 1) (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

// Dicas:

// ◉ Uma string é um array de caracteres, então cada elemento do array é uma letra.
// ◉ O valor de cada numeral romano é:

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// ◉ Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// ◉ Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.



// 2) Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

function arrayOfNumbers(vector) {
  let evenNumberArray = [];

  for (let arrayInVector of vector) {
    for (let number of arrayInVector) {
      if (number % 2 === 0) {
        evenNumberArray.push(number);
      }
    }
  }

  return evenNumberArray;
}

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
console.log(arrayOfNumbers(vector));

// 3) A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

function checkingBasket(basket) {
  let basketObject = {};

  for (let item of basket) {
    if (!basketObject[item]) {
      basketObject[item] = 1;
    } else {
      basketObject[item] += 1;
    }
  }

  return basketObject
}

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

console.log(checkingBasket(basket));