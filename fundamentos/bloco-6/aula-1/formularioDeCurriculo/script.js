let activateChecksJs = false;

const informations = [];

const inputCpf = document.querySelector('#cpf');
const inputCity = document.querySelector('#city');
const inputDate = document.querySelector('#date');
const inputName = document.querySelector('#name');
const inputType = document.querySelector('#type');
const inputEmail = document.querySelector('#email');
const inputAddress = document.querySelector('#email');
const inputOffice = document.querySelector('#office');
const inputJobDescription = document.querySelector('#job-description');

const sectionState = document.querySelector('#state');
const textareaResumeSummary = document.querySelector('#resume-summary');
const buttonPreventValidations = document.querySelector('#prevent-validations');

function generateOptions() {
  const select = document.querySelector('select');
  const estadosDoBrasil = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  estadosDoBrasil.forEach((items) => {
    const option = document.createElement('option');
    select.appendChild(option).innerHTML = items;
  });
}

function checkName() {
  if (inputName.value <= 40 && inputName.value !== '') {
    informations.push(inputName.value);
  } else {
    alert('Valor Inválido!');
  }
}

function checkEmail() {
  if (inputEmail.value <= 50 && inputEmail.value !== '') {
    informations.push(inputEmail.value);
  } else {
    alert('Valor Inválido!');
  }
}

function checkCpf() {
  if (inputCpf.value <= 11 && inputCpf.value !== '') {
    informations.push(inputCpf.value);
  } else {
    alert('Valor Inválido!');
  }
}

function checkAddress() {
  if (inputAddress.value <= 200 && inputAddress.value !== '') {
    informations.push(inputAddress.value);
  } else {
    alert('Valor Inválido!');
  }
}

function checkCity() {
  if (inputCity.value <= 28 && inputCity.value !== '') {
    informations.push(inputCity.value);
  } else {
    alert('Valor Inválido!');
  }
}

function checkState() {
  informations.push(sectionState.value);
}

function checkType() {
  if (inputType.value !== '') {
    informations.push(inputCity.value);
  } else {
    alert('Valor Inválido!');
  }
}

function checkResumeSummary() {
  if (textareaResumeSummary <= 1000 && textareaResumeSummary.value !== '') {
    informations.push(textareaResumeSummary.value);
  } else {
    alert('Valor Inválido!');
  }
}

function checkOffice() {
  if (inputOffice.value <= 40 && inputOffice.value !== '') {
    informations.push(inputOffice.value);
  } else {
    alert('Valor Inválido!');
  }
}

function checkJobDescription() {
  if (inputJobDescription.value <= 500 && inputJobDescription.value !== '') {
    informations.push(inputJobDescription.value);
  } else {
    alert('Valor Inválido!');
  }
}

function checkDate() {
  if (date.value.length === 10) {
    for (let index = 0; index < date.value.length; index += 1) {
      if (index === 0 && date.value[index] <= 0 && date.value[index] > 31 || index === 1 && date.value[index] <= 0 && date.value[index] > 31
        || index === 2 && date.value[index] !== '/' || index === 5 && date.value[index] !== '/' || index === 3 && date.value[index] <= 0 &&
        date.value[index] > 12 || index === 4 && date.value[index] <= 0 && date.value[index] > 12 || index === 6 && date.value[index] < 0 ||
        index === 7 && date.value[index] < 0 || index === 8 && date.value[index] < 0 || index === 9 && date.value[index] < 0) {
        alert('Valor de data inválido!');
      }
    }
  } else {
    alert('Valor de data inválido!');
  }
}

generateOptions();

buttonPreventValidations.addEventListener('click', (event) => {
  event.preventDefault();
  // activateChecksJs = true;
});

inputCpf.addEventListener('change', checkCpf);
inputCity.addEventListener('change', checkCity);
inputDate.addEventListener('change', checkDate);
inputName.addEventListener('change', checkName);
inputType.addEventListener('change', checkType);
inputEmail.addEventListener('change', checkEmail);
inputOffice.addEventListener('change', checkOffice);
sectionState.addEventListener('change', checkState);
inputAddress.addEventListener('change', checkAddress);
inputJobDescription.addEventListener('change', checkJobDescription);
textareaResumeSummary.addEventListener('change', checkResumeSummary);

// if (informations.length === 11) {
//   const divInformations = document.createElement('div');
//   informations.forEach((items) => {
//     const span = document.createElement('span');
//     span.innerHTML = items;
//     divInformations.appendChild(span);
//   });
// }

// Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.

// Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.

// Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.

// Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.