//-----------------------------------------------------------------------------------------------------------------------------------------//

const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
} = require('./exercicios.js');

// 1) A função sum(a, b) retorna a soma do parâmetro a com o b

// ◉ Teste se o retorno de sum(4, 5) é 9
// ◉ Teste se o retorno de sum(0, 0) é 0
// ◉ Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// ◉ Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe('Testa a função sum', () => {
  it('Testa o retorno da soma de sum', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  it('Testa se sum dispara um erro caso alguns dos parâmetros sejam strings', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});

// 2) A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

// ◉ Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// ◉ Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// ◉ Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

describe('Testa a função myRemove', () => {
  it('Testa se myRemove retorna um array sem o item que foi passado como segundo parâmetro', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
});

// 3) A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

// ◉ Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// ◉ Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// ◉ Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// ◉ Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// ◉ Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe('Testa a função myFizzBuzz', () => {
  it('Testa se myFizzBuzz tem o retorno esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(25)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz('a')).toBe(false);
  });
});

// 4) Para as funções encode e decode crie os seguintes testes em Jest:

// ◉ Teste se encode e decode são funções;
// ◉ Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// ◉ Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
// ◉ Teste se as demais letras/números não são convertidos para cada caso;
// ◉ Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

// Encode
describe('Testa a função encode', () => {
  it('Testa se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  it('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  });

  it('Testa se as demais letras não são convertidas', () => {
    expect(encode('angra, banda nota 1999999999')).toBe('1ngr1, b1nd1 n4t1 1999999999');
  });

  it('Testa se a string que é retornada têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('angra, banda nota 1999999999').length).toBe('angra, banda nota 1999999999'.length);
  });
});

// Decode
describe('Testa a função decode', () => {
  it('Testa se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  it('Testa se os números 1, 2, 3, 4 e 5 são convertidos em a, e, i, o, u', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  });

  it('Testa se os demais números não são convertidos', () => {
    expect(decode('1ngr1, b1nd1 n4t1 1999999999')).toBe('angra, banda nota a999999999');
  });

  it('Testa se a string que é retornada têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('1ngr1, b1nd1 n4t1 1999999999').length).toBe('angra, banda nota 1999999999'.length);
  });
});

// 5) A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

// {
//   tech: 'nomeTecnologia',
//   name: name,
// }

// Implemente a função techList a partir dos testes abaixo.

describe('Testa a função techList', () => {

  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });

  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });

  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });

  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

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

// Implemente a função hydrate a partir dos testes abaixo.

describe('Testa a função hydrate', () => {

  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });

  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });

  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

//-----------------------------------------------------------------------------------------------------------------------------------------//