# Bloco 05: JavaScript: DOM, Eventos e Web Storage

## Aula 01: JavaScript - DOM e seletores

### O que vamos aprender?

Hoje, você vai aprender sobre o famoso DOM , a estrutura que faz a ponte entre o HTML e o JavaScript e que permite interação entre os dois. Por fim, você vai aprender um pouco sobre algumas das interações possíveis: veremos como recuperar dados do HTML através do JavaScript .

### Você será capaz de:

- Acessar dados do HTML com o JavaScript através dos seletores do DOM.

## Aula 02: JavaScript - Trabalhando com elementos

### O que vamos aprender?

Na quinta parte da aula sobre JavaScript , você aprenderá a adicionar e remover tags de uma página.

Além disso, aprenderá mais uma forma de buscar os elementos da página.

### Você será capaz de:

- Adicionar e remover elementos HTML da página via JavaScript ;
- Buscar os elementos da página com a propriedade parentNode .

## Aula 03: JavaScript - Eventos

### O que vamos aprender?

Você já aprendeu diversas formas de utilizar o JavaScript para manipular os elementos HTML e até alterar os estilos da página, certo?

Agora você vai aprender como utilizar os eventos do JavaScript para fazer com que funções sejam executadas quando alguém as usam ou quando o navegador fizer alguma interação com a sua página web.

### Você será capaz de:

- Mudar o conteúdo, estilo e outros atributos de elementos HTML a partir de eventos do JavaScript ;
- Aplicar no seu código JavaScript eventos de click e change , entre outros.

## Aula 04: JavaScript - Web Storage

### O que vamos aprender?

Você aprenderá sobre Web Storage . Web Storage provê mecanismos para que as aplicações web possam salvar dados nos browsers das pessoas.

Antes do HTML 5 , as aplicações tinham que salvar os dados locais em cookies, que eram enviados para o servidor a cada requisição do browser . Web Storage é mais seguro e tem a capacidade de salvar uma quantidade maior de dados sem afetar o desempenho da página.

Ao contrário dos Cookies , o limite de armazenamento é muito maior (pelo menos 5MB), e as informações não são transferidas para o servidor durante as requisições.

Web Storage é por origem (por domínio e protocolo). Todas as páginas de uma origem podem salvar e acessar os mesmos dados. Por exemplo, se o domínio betrybe.com salva o dado X no Web Storage , o domínio course.betrybe.com consegue ler esse dado X .

### Você será capaz de:

- Manipular o objeto localStorage ;
- Manipular o objeto sessionStorage .

### Por que isso é importante?

Salvar dados no browser das pessoas que acessam uma determinada página web é muito útil, pois podemos fazer com que essa página consuma esses dados e apresente diferentes conteúdos e ações para diferentes pessoas.

Quando você inicia um vídeo no YouTube e depois retorna, o vídeo continua de onde parou. Um carrinho de compras de um site permanece com os itens que você adicionou durante semanas e uma página é apresentada já com o seu nome, e você nem fez login.

Esses são exemplos de aplicações que utilizam o browser para salvar esses dados e facilitar a criação de tais funcionalidades.

Esse armazenamento local é o conteúdo de hoje, Web Storage .