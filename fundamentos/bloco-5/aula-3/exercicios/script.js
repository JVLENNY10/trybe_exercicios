function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1) O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// ◉ Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// ◉ Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// ◉ Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function addDay() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  dezDaysList.forEach((items) => {
    const li = document.createElement('li');
    document.querySelector('#days').appendChild(li).classList.add('day');
    if (items === 24 || items === 25 || items === 31) {
      li.classList.add('holiday');
    } if (items === 4 || items === 11 || items === 18 || items === 25) {
      li.classList.add('friday');
    }
    li.innerHTML = items;
  });
}

addDay();

// 2) Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

// ◉ Adicione a este botão a ID "btn-holiday" .
// ◉ Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function holiday(string) {
  const buttonHoliday = document.createElement('button');
  buttonHoliday.innerHTML = string;
  document.querySelector('.buttons-container').appendChild(buttonHoliday).id = 'btn-holiday';
}

holiday('Feriados');

// 3) Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

// ◉ É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function clickButtonHoliday(select) {
  const holiday = document.querySelectorAll('.holiday');
  const buttonHoliday = document.querySelector('#btn-holiday');

  if (select.target === buttonHoliday) {
    holiday.forEach((items) => {
      items.classList.toggle('emphasisHoliday');
      if (items.classList.contains('emphasisHoliday')) {
        items.style.backgroundColor = 'green';
      } else {
        items.style.backgroundColor = 'rgb(238,238,238)';
      }
    });
  }
}

document.addEventListener('click', clickButtonHoliday);

// 4) Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

// ◉ Adicione a este botão o ID "btn-friday" .
// ◉ Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function friday(string) {
  const buttonFriday = document.createElement('button');
  buttonFriday.innerHTML = string;
  document.querySelector('.buttons-container').appendChild(buttonFriday).id = 'btn-friday';
}

friday('Sexa-feira');

// 5) Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

// ◉ É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function clickButtonFriday(select) {
  const holiday = document.querySelectorAll('.friday');
  const buttonHoliday = document.querySelector('#btn-friday');

  if (select.target === buttonHoliday) {
    holiday.forEach((items) => {
      items.classList.toggle('emphasisFriday');
      if (items.classList.contains('emphasisFriday')) {
        items.style.backgroundColor = 'blue';
      } else {
        items.style.backgroundColor = 'rgb(238,238,238)';
      }
    });
  }
}

document.addEventListener('click', clickButtonFriday);

// 6) Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// ◉ Dica - Propriedade: event.target .

function mouseInText() {
  const days = document.querySelectorAll('.day');

  days.forEach((items) => {
    items.addEventListener('mouseover', function () {
      items.style.fontSize = '25px';
    });

    items.addEventListener('mouseout', function () {
      items.style.fontSize = '20px';
    });
  });
}

window.addEventListener('load', mouseInText);

// 7) Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

// ◉ O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function assignment(string) {
  const span = document.createElement('span');
  document.querySelector('.my-tasks').appendChild(span).innerHTML = string;
}

assignment('cozinhar');

// 8) Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

// ◉ O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// ◉ O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function legend(cor) {
  const div = document.createElement('div');
  const myTask = document.querySelector('span');
  myTask.style.color = cor;
  div.style.backgroundColor = cor;
  myTask.appendChild(div).classList.add('task');
}

legend('red');

// 9) Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

// ◉ Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function taskSelected(select) {
  const taskItem = document.querySelectorAll('.task');

  taskItem.forEach((items) => {
    if (select.target === items) {
      items.classList.toggle('selected');
      if (items.classList.contains('selected')) {
        items.style.backgroundColor = 'green';
      } else {
        items.style.backgroundColor = 'red';
      }
    }
  });
}

document.addEventListener('click', taskSelected);

// 10) Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

// ◉ Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function selectedDay(select) {
  const span = document.querySelector('span');
  const days = document.querySelectorAll('.day');

  days.forEach((items) => {
    if (select.target === items) {
      items.classList.toggle('selectDay');
      if (items.classList.contains('selectDay')) {
        items.style.color = span.style.color
      } else {
        items.style.color = 'rgb(119,119,119)';
      }
    }
  });
}

document.addEventListener('click', selectedDay);

// Bônus:

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

// ◉ Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// ◉ Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// ◉ Dica - Propriedade: keyCode .

function addUl() {
  const ul = document.createElement('ul');
  document.querySelector('.input-container').appendChild(ul).id = 'my-commitments';
  ul.style.width = '30px';
  ul.style.margin = '20px 37%';
}

addUl();

function addCommitment(select) {
  const buttonAdd = document.querySelector('#btn-add');
  const taskInput = document.querySelector('#task-input');
  const myCommitments = document.querySelector('#my-commitments');

  if (select.target === buttonAdd && taskInput.value !== '' || select.keyCode === 13 && taskInput.value !== '') {
    const li = document.createElement('li');
    myCommitments.appendChild(li).innerHTML = taskInput.value;
    li.style.textAlign = 'center';
    taskInput.value = '';
  } else if (select.target === buttonAdd && taskInput.value === '' || select.keyCode === 13 && taskInput.value === '') {
    alert('Erro! Valor inválido!')
  }
}

document.addEventListener('click', addCommitment);
document.addEventListener('keypress', addCommitment);
