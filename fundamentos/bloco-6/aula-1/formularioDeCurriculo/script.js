let informations = [];
let activateChecksJs = false;

const inputCpf = document.querySelector('#cpf');
const inputCity = document.querySelector('#city');
const inputDate = document.querySelector('#date');
const inputName = document.querySelector('#name');
const inputType = document.querySelector('#type');
const inputEmail = document.querySelector('#email');
const inputAddress = document.querySelector('#address');
const inputOffice = document.querySelector('#office');
const inputJobDescription = document.querySelector('#job-description');

const sectionState = document.querySelector('#state');
const textareaResumeSummary = document.querySelector('#resume-summary');

const body = document.querySelector('body');
const divInformationsPass = document.createElement('div');
const divInformationsError = document.createElement('div');

const buttonClear = document.querySelector('#clear');
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
  if (inputName.value.length <= 40 && inputName.value !== '') {
    informations.push(inputName.value);
  } else {
    // alert('Valor de Nome Inválido!');
    const p = document.createElement('p');
    p.innerHTML = 'Valor de Nome Inválido!';
    divInformationsError.appendChild(p);
  }
}

function checkEmail() {
  if (inputEmail.value.length <= 50 && inputEmail.value !== '') {
    informations.push(inputEmail.value);
  } else {
    // alert('Valor de E-Mail Inválido!');
    const p = document.createElement('p');
    p.innerHTML = 'Valor de E-Mail Inválido!';
    divInformationsError.appendChild(p);
  }
}

function checkCpf() {
  if (inputCpf.value.length <= 11 && !isNaN(inputCpf.value) && inputCpf.value !== '') {
    informations.push(inputCpf.value);
  } else {
    // alert('Valor de CPF Inválido!');
    const p = document.createElement('p');
    p.innerHTML = 'Valor de CPF Inválido!';
    divInformationsError.appendChild(p);
  }
}

function checkAddress() {
  if (inputAddress.value.length <= 200 && inputAddress.value !== '') {
    informations.push(inputAddress.value);
  } else {
    // alert('Valor de Endereço Inválido!');
    const p = document.createElement('p');
    p.innerHTML = 'Valor de Endereço Inválido!';
    divInformationsError.appendChild(p);
  }
}

function checkCity() {
  if (inputCity.value.length <= 28 && inputCity.value !== '') {
    informations.push(inputCity.value);
  } else {
    // alert('Valor de Cidade Inválido!');
    const p = document.createElement('p');
    p.innerHTML = 'Valor de Cidade Inválido!';
    divInformationsError.appendChild(p);
  }
}

function checkState() {
  informations.push(sectionState.value);
}

function checkType() {
  if (inputType.value.length !== '') {
    informations.push(inputCity.value);
  } else {
    // alert('Selecione uma opção(Casa ou Apartamento)!');
    const p = document.createElement('p');
    p.innerHTML = 'Selecione uma opção(Casa ou Apartamento)!';
    divInformationsError.appendChild(p);
  }
}

function checkResumeSummary() {
  if (textareaResumeSummary.value.length <= 1000 && textareaResumeSummary.value !== '') {
    informations.push(textareaResumeSummary.value);
  } else {
    // alert('Valor de Resumo do Currículo Inválido!');
    const p = document.createElement('p');
    p.innerHTML = 'Valor de Resumo do Currículo Inválido!';
    divInformationsError.appendChild(p);
  }
}

function checkOffice() {
  if (inputOffice.value.length <= 40 && inputOffice.value !== '') {
    informations.push(inputOffice.value);
  } else {
    // alert('Valor de Cargo Inválido!');
    const p = document.createElement('p');
    p.innerHTML = 'Valor de Cargo Inválido!';
    divInformationsError.appendChild(p);
  }
}

function checkJobDescription() {
  if (inputJobDescription.value.length <= 500 && inputJobDescription.value !== '') {
    informations.push(inputJobDescription.value);
  } else {
    // alert('Valor de Descrição do Serviço Inválido!');
    const p = document.createElement('p');
    p.innerHTML = 'Valor de Descrição do Serviço Inválido!';
    divInformationsError.appendChild(p);
  }
}

function checkDate() {
  if (date.value.length === 10) {
    let year = '';
    for (let index = 0; index < date.value.length; index += 1) {
      if (index === 0 && date.value[index] <= 0 && date.value[index] > 31 || index === 1 && date.value[index] <= 0 && date.value[index] > 31
        || index === 2 && date.value[index] !== '/' || index === 5 && date.value[index] !== '/' || index === 3 && date.value[index] <= 0 &&
        date.value[index] > 12 || index === 4 && date.value[index] <= 0 && date.value[index] > 12 || index === 6 && date.value[index] < 0 ||
        index === 7 && date.value[index] < 0 || index === 8 && date.value[index] < 0 || index === 9 && date.value[index] < 0) {
        // alert('Valor de Data inválido. Verifique se contém as barras.');
        const p = document.createElement('p');
        p.innerHTML = 'Valor de Data inválido. Verifique se contém as barras.';
        divInformationsError.appendChild(p);
        break;
      } else {
        year += date.value[index];
      }
    }

    if (year.length === 10) {
      informations.push(year);
    }
  } else {
    // alert('Valor de Data inválido!');
    const p = document.createElement('p');
    p.innerHTML = 'Valor de Data inválido. Verifique se contém as barras.';
    divInformationsError.appendChild(p);
  }
}

function checkAll() {
  if (informations.length === 11) {
    divInformationsError.remove();
    informations.forEach((items) => {
      const p = document.createElement('p');
      p.innerHTML = items;
      divInformationsPass.appendChild(p);
    });
    body.appendChild(divInformationsPass);
  } else {
    divInformationsPass.remove();
    body.appendChild(divInformationsError);
  }
}

generateOptions();

buttonPreventValidations.addEventListener('click', (event) => {
  event.preventDefault();

  checkName();
  checkEmail();
  checkCpf();
  checkAddress();
  checkCity();
  checkState();
  checkType();
  checkResumeSummary();
  checkOffice();
  checkJobDescription();
  checkDate();
  checkAll();

  informations = [];
});

buttonClear.addEventListener('click', (() => {
  inputCpf.value = '';
  inputCity.value = '';
  inputDate.value = '';
  inputName.value = '';
  inputType.value = '';
  inputEmail.value = '';
  inputAddress.value = '';
  inputOffice.value = '';
  inputJobDescription.value = '';
  sectionState.value = '';
  textareaResumeSummary.value = '';
  divInformationsError.remove();
}));
