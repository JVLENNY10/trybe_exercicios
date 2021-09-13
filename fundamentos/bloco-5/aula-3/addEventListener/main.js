const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1) Crie uma função que adicione a classe 'tech' ao elemento selecionado;

// ◉ Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addClassTech(selection) {
  if (selection.target === firstLi) {
    secondLi.classList.remove('tech');
    thirdLi.classList.remove('tech');
    selection.target.classList.toggle('tech');
  } else if (selection.target === secondLi) {
    firstLi.classList.remove('tech');
    thirdLi.classList.remove('tech');
    selection.target.classList.toggle('tech');
  } else if (selection.target === thirdLi) {
    firstLi.classList.remove('tech');
    secondLi.classList.remove('tech');
    selection.target.classList.toggle('tech');
  }

  return selection;
}

document.addEventListener('click', addClassTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento scom a classe 'tech';

function changeText() {
  const tech = document.querySelector('.tech');

  tech.innerHTML = input.value;

  return tech
}

document.addEventListener('change', changeText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;

// ◉ Que tal redirecionar para seu portifólio?

function doubleClick(selection) {
  if (selection.target === myWebpage) {
    window.open('https://jvlenny10.github.io/');
  }

  return selection;
}

document.addEventListener('dblclick', doubleClick);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

function changeColor() {
  myWebpage.addEventListener('mouseover', function () {
    myWebpage.style.color = 'darkred'
  });

  myWebpage.addEventListener('mouseout', function () {
    myWebpage.style.color = 'white';
  });
}

window.addEventListener('load', changeColor);

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // ◉ O Event é passado como um parâmetro para a função.
  
  event.target.innerText = 'Opção reiniciada';

  // ◉ O event possui várias propriedades, porém a mais usada é o event.target, que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// ◉ Não precisa passar o parâmetro dentro da callback resetText. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'firstLi'.