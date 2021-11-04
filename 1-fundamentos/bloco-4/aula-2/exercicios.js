//-----------------------------------------------------------------------------------------------------------------------------------------//

// Exercícios

// 1) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers) {
  console.log(number);
}

// 2) Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numbers.length; i += 1) {
  resultado = resultado + numbers[i];
}

console.log(resultado);

// 3) Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// ◉ A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma = soma + numbers[i];
}

let media = soma / numbers.length;
console.log(media);

// 4) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma = soma + numbers[i];
}

let media = soma / numbers.length;
console.log(media);

if (media > 20) {
  console.log("valor maior que 20")
} else {
  console.log("valor menor ou igual a 20")
}

// 5) Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// Forma 1:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maxNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > numbers[i + 1]) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  } else {
    if (numbers[i + 1] > maxNumber) {
      maxNumber = numbers[i + 1];
    }
  }
}

console.log(maxNumber);

// Forma 2:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maxNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log(maxNumber);

// 6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 1) {
    impar += 1;
  }
}

if (impar > 0) {
  console.log(impar);
} else {
  console.log("nenhum valor ímpar encontrado");
}

// 7) Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// Forma 1:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < numbers[i + 1]) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
  } else {
    if (numbers[i + 1] < minNumber) {
      minNumber = numbers[i + 1];
    }
  }
}

console.log(minNumber);

// Forma 2:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}

console.log(minNumber);

// 8) Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let contArray = [];

for (let i = 1; i <= 25; i += 1) {
  contArray.push(i);
}

console.log(contArray);

// 9) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let contArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let i = 0; i < contArray.length; i += 1) {
  console.log(contArray[i] / 2);
}

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Bônus

// Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}

// 1) Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
  for (let i2 = 0; i2 < i; i2 += 1) {
    if (numbers[i] < numbers[i2]) {
      let number = numbers[i];
      numbers[i] = numbers[i2];
      numbers[i2] = number;
    }
  }
}

console.log(numbers)

// 2) Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
  for (let i2 = 0; i2 < i; i2 += 1) {
    if (numbers[i] > numbers[i2]) {
      let number = numbers[i];
      numbers[i] = numbers[i2];
      numbers[i2] = number;
    }
  }
}

console.log(numbers)

// 3) Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersUpdate = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] === numbers[numbers.length - 1]) {
    numbersUpdate.push(numbers[i] * 2)
  } else {
    numbersUpdate.push(numbers[i] * numbers[i + 1])
  }
}

console.log(numbersUpdate)

//-----------------------------------------------------------------------------------------------------------------------------------------//