# Bloco 06: HTML e CSS: Forms, Flexbox e Responsivo

## Aula 01: HTML & CSS - Forms

### O que vamos aprender?

Na aula de hoje, vamos aprender sobre formulários em HTML , que são uma forma de enviar informações para outra página do seu site ou para um servidor.

### Você será capaz de:

- Criar formulários em HTML com as tags : input , button , textarea , select , form .

### Por que isso é importante?

Quantas vezes você já se deparou com um formulário de cadastro, uma página de login, ou até mesmo precisou enviar um arquivo para o servidor? Isso é bem comum, não é mesmo? A tag <form> do HTML , juntamente com seus elementos, te permite criar todos esses tipos de interação com o usuário.

Após o curso da Trybe, no seu dia a dia de trabalho, será comum encontrar tarefas que, no fim das contas, são de criação de formulário. Por isso, é importante entender como um formulário funciona.

## Aula 02: Bibliotecas JavaScript e Frameworks CSS

### O que vamos aprender?

Hoje você aprenderá como adicionar bibliotecas JavaScript e CSS aos seus sites.

Existem literalmente milhares de bibliotecas JavaScript e CSS disponíveis gratuitamente na Internet, com os mais diversos propósitos. À medida que os sites que você desenvolve se tornam mais complexos, será preciso encontrar e integrar ferramentas que facilitem e acelerem o desenvolvimento.

### Você será capaz de:

- Adicionar e utilizar bibliotecas JavaScript e CSS em seus sites;
- Utilizar bibliotecas JavaScript externas a partir de uma CDN .

### Por que isso é importante?

No dia a dia do desenvolvimento de software, você vai precisar encontrar, selecionar e incorporar bibliotecas aos programas que você desenvolve. É muito importante conhecer os fundamentos de uma tecnologia, mas é importante também não reinventar a roda a todo momento. Por exemplo, imagine que você, toda vez que precisasse calcular a raiz quadrada de um número, tivesse que escrever uma função para isso, talvez utilizando uma fórmula matemática complexa! 😨Para que isso não seja necessário, outras pessoas já se deram o trabalho de escrever esse tipo de função de forma extremamente otimizada e disponibilizar para que outras pessoas utilizem.

O mesmo princípio se aplica ao desenvolvimento web. Existem muitos problemas que aparecem com frequência, à medida que a complexidade dos seus sites aumenta. Por exemplo, na aula anterior você aprendeu a construir formulários HTML . Imagine que, em um formulário de cadastro, você quer garantir que o nome e sobrenome sempre sejam preenchidos, que o email da pessoa tenha um formato válido e que seja impossível selecionar uma data de nascimento inexistente. Além disso, você acha que ficar digitando a data manualmente é cansativo, e quer colocar um campo que, ao ser clicado, abre um calendário para escolher a data. Como você faria isso? Com JavaScript (e um pouco de muito CSS , no caso do calendário). Isso, porém, é algo tão comum que já existem bibliotecas que fornecem essas funcionalidades prontas para você.

Da mesma forma, existem muitos frameworks CSS que facilitam a construção de sites dinâmicos, acessíveis e responsivos, coisas com as quais você deve se preocupar sempre daqui para frente. Alguns exemplos mais famosos: Bulma , Bootstrap , Semantic UI e Materialize .

## Introdução - CSS Flexbox

### O que vamos aprender?

Você vai aprender sobre CSS Flexbox .

Desenvolver páginas web responsivas é uma tarefa muito importante, pois as pessoas acessam a Internet através de vários dispositivos com telas de diferentes tamanhos.

Uma das abordagens para criar páginas responsivas é dividir a página em segmentos lógicos, usando cálculos baseados em porcentagem e, em seguida, ajustando os elementos para caberem nesse espaço definido.

Infelizmente, a prática não é tão simples quanto descrito acima. Isso acontece porque os elementos não se assentam por padrão, próximos um do outro, como gostaríamos - pelo menos não os que têm a propriedade display configurada para ser block . Um outro problema comum é, depois de tudo configurado, a adição de margens e definição da propriedade float voltar a desconfigurar toda a estrutura inicialmente proposta.
Como descrito acima, criar páginas responsivas utilizando float e posicionamento é um trabalho complicado.

Para tornar esse trabalho mais fácil, você irá aprender a utilizar o CSS Flexbox , que é um módulo de layout que torna fácil o desenvolvimento de estruturas responsivas.

Para isso, dividimos o conteúdo em duas partes:

1 - Primeiro você aprenderá sobre as propriedades flex-direction , flex-wrap , flex-flow , reverse , justify-content , align-items e align-content . Todas essas propriedades serão aplicadas em containers .

- CSS Flexbox - parte I

2 - Agora, aprenderá sobre as propriedades align-self , order , flex-grow , flex-shrink e flex-basis . Também veremos como podemos trabalhar com margins no Flexbox . Essas propriedades serão aplicadas em items .

- CSS Flexbox - parte II

### Vamos começar!

## Aula 03: CSS Flexbox - Parte 1

### O que vamos aprender?

Você vai aprender sobre CSS Flexbox Layout ( Flexible Box ). Flexbox é um módulo que visa fornecer uma maneira mais eficiente de organizar, alinhar e distribuir espaço entre os itens em um container , mesmo quando seu tamanho é desconhecido.

Um container pode ser qualquer elemento HTML que contenha outros elementos, como, por exemplo, uma <div> ou <section> . Esse elemento pai é chamado de container , e os elementos filhos serão os itens.

A ideia principal por trás do "layout flexível" é dar ao container a habilidade de alterar o tamanho ( width e height ) e a ordem dos itens para melhor ocupar o espaço disponível. Essa habilidade nos permite acomodar uma página em todos os tipos de dispositivos e tamanhos de tela.

### Você será capaz de:

- Utilizar CSS Flexbox para criar layouts flexíveis;
- Utilizar CSS Flexbox para alterar o comportamento de containers .

### Por que isso é importante?

O acesso à Internet não é feito apenas por computadores e notebooks. Tablets e principalmente smartphones também são utilizados para essa função. Com tantos dispositivos e tamanhos diferentes de telas, um design responsivo é necessário para promover a melhor experiência possível aos visitantes, independentemente do dispositivo e tela que estejam usando.

Flexbox é uma ferramenta que nos permitirá criar páginas com design responsivo de forma simples e organizada.

## Aula 04: CSS Flexbox - Parte 2

### O que vamos aprender?

Você vai aprender mais sobre CSS Flexbox .

Na aula anterior você aprendeu sobre as propriedades Flexbox que atuam no container . Agora é hora de aprender sobre as propriedades que atuam nos items .

### Você será capaz de:

- Utilizar CSS Flexbox para criar layouts flexíveis;
- Utilizar CSS Flexbox para alterar o comportamento de items .

### Por que isso é importante?

Aprender sobre as propriedades Flexbox que agem nos items é imprescindível, pois só dessa forma você terá o controle total sobre o layout de uma página.