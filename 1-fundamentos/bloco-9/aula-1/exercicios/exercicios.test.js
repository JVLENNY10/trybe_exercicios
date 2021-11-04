//-----------------------------------------------------------------------------------------------------------------------------------------//

const { uppercase, getPokemonDetails } = require('./exercicios.js');

// 7)
it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});

// 9) A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o 
// sistema que distribui os pokémons. Crie um novo arquivo.test.js ou.spec.js e copie o código abaixo. Complete os testes para a função 
// getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const callback = (error, message) => {
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    };

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    const callback = (error, message) => {
      expect(message).toBe(expectedString);
      done();
    };

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});

//-----------------------------------------------------------------------------------------------------------------------------------------//