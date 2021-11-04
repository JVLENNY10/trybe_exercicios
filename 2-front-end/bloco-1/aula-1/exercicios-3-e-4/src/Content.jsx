import React from "react";

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      <main>
        { conteudos.map((conteudo) =>
          <article key={ conteudo.conteudo } className='content'>
            <p>O conteúdo é: { conteudo.conteudo }</p>
            <p>Status: { conteudo.status }</p>
            <p>Bloco: { conteudo.bloco }</p>
          </article>)
        }
      </main>
    );
  }
}

export default Content;
