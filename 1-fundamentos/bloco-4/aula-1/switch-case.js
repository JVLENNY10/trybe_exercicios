//-----------------------------------------------------------------------------------------------------------------------------------------//

// Switch e Case:

// 1) Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada';

let state = "aprovada"

// 2) Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica'.

switch (state) {
  case "aprovada":
    console.log(state)
    break
  case "lista":
    console.log(state)
    break
  case "reprovada":
    console.log(state)
    break
  default:
    console.log("não se aplica")
}

//-----------------------------------------------------------------------------------------------------------------------------------------//