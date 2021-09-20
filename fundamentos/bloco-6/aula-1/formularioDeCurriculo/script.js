function generateOptions() {
  const select = document.querySelector('select');
  const estadosDoBrasil = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  estadosDoBrasil.forEach((items) => {
    const option = document.createElement('option');
    select.appendChild(option).innerHTML = items;
  });
}

// function checkDate() {
//   const date = document.querySelector('#date').value;

//   for (let index = 0; index < date.length; index += 1) {
//     if (index === 0 && data[index] > 0 && data[index] <= 31 || index === 1 && data[index] > 0 && data[index] <= 31) { }
//     if (index === 2 && date[index] !== '/' || index === 5 && date[index] !== '/') { }
//   }
// }

generateOptions();