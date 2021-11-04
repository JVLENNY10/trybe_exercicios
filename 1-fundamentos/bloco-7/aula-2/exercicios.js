//-----------------------------------------------------------------------------------------------------------------------------------------//

// Parte I

// Para os exercícios a seguir, use o seguinte código:

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Agora você vai fazer alguns exercícios de fixação.

const customerInfo = (order) => {
  // 1) Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

  // ◉ Note que o parâmetro da função já está sendo passado na chamada da função.

  // Adicione abaixo as informações necessárias.

  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}`;
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  // 2) Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

  // ◉ Modifique o nome da pessoa compradora.
  // ◉ Modifique o valor total da compra para R$ 50,00.

  // Adicione abaixo as informações necessárias.

  const name = order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const payment = order.payment.total = '50';

  return `Olá ${name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é R$ ${payment},00.`;
};

console.log(orderModifier(order));

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Parte II

// Para os exercícios a seguir, use o seguinte código:

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1) Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurn = (object, key, value) => {
  object[key] = value;

  return object;
};

console.log(addTurn(lesson2, 'turno', 'Noite'));

// 2) Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = object => {
  const keys = Object.keys(object);

  let result = '';
  keys.forEach((items, index) => {
    result += `${index + 1} - ${items}
`;
  });

  return result;
};

console.log(listKeys(lesson2));

// 3) Crie uma função para mostrar o tamanho de um objeto.

const objectLength = object => {
  return Object.entries(object).length;
};

console.log(objectLength(lesson2));

// 4) Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = object => {
  const values = Object.values(object);

  let result = '';
  values.forEach((items, index) => {
    result += `${index + 1} - ${items}
`;
  });

  return result;
};

console.log(listValues(lesson2));

// 5) Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

// console.log(allLessons);
// {
//   lesson1:
//    { materia: 'Matemática',
//      numeroEstudantes: 20,
//      professor: 'Maria Clara',
//      turno: 'manhã' },
//   lesson2:
//    { materia: 'História',
//      numeroEstudantes: 20,
//      professor: 'Carlos',
//      turno: 'noite' },
//   lesson3:
//    { materia: 'Matemática',
//      numeroEstudantes: 10,
//      professor: 'Maria Clara',
//      turno: 'noite' }
// };

const allLessons = {};
allLessons[`lesson1`] = Object.assign(lesson1);
allLessons[`lesson2`] = Object.assign(lesson2);
allLessons[`lesson3`] = Object.assign(lesson3);
console.log(allLessons);

// 6) Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = object => {
  let result = 0;
  const keys = Object.keys(object);

  keys.forEach((items) => {
    result += object[items].numeroEstudantes;
  });

  return `O número total de estudantes é: ${result}`;
};

console.log(totalStudents(allLessons));

// 7) Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const getValueByNumber = (object, position) => {
  let result = Object.values(object);
  console.log(result);

  return result[position];
};

console.log(getValueByNumber(lesson1, 0));

// 8) Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const verifyPair = (object, key, value) => {
  const valueKey = object[key];

  if (valueKey === value) {
    return true;
  }

  return false;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

//-----------------------------------------------------------------------------------------------------------------------------------------//

// Bônus

// 1) Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const countStudents = object => {
  let result = 0;
  const keys = Object.keys(object);

  keys.forEach((items) => {
    if (object[items].materia === 'Matemática') {
      result += object[items].numeroEstudantes;
    }
  });

  return result;
};

console.log(countStudents(allLessons));

// 2) Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

// console.log(createReport(allLessons, 'Maria Clara'))
// {
//   professor: 'Maria Clara',
//   aulas: [ 'Matemática', 'Matemática' ],
//   estudantes: 30
// }

const createReport = (object, teacher) => {
  const result = {};
  const matter = [];
  const keys = Object.values(object);

  keys.forEach((items) => {
    if (items.professor === teacher) {
      matter.push(items.materia);
    }
  });

  result.professor = teacher;
  result.materia = matter;
  result.estudantes = countStudents(object);

  return result;
};

console.log(createReport(allLessons, 'Maria Clara'));

//-----------------------------------------------------------------------------------------------------------------------------------------//