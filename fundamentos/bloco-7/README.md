# Bloco 07: Introdução à JavaScript ES6 e Testes Unitários

## Aula 01: JavaScript ES6 - let, const, arrow functions e template literals

### O que vamos aprender

Neste bloco e no próximo, você vai aprender sobre a mais nova versão do JavaScript , conhecida como ES6 , ECMAScript 6 ou ES2015 .

Esses vários nomes podem gerar alguma dúvida, mas na verdade todos fazem referência à mesma linguagem. JavaScript é como nós chamamos a linguagem, só que esse nome é um trademark da Oracle . O nome oficial da linguagem é ECMAScript , e ES é apenas a abreviação (E CMA S cript).

Essa nova versão possui alguns objetivos:

- Ser uma linguagem melhor para construir aplicações complexas;
- Resolver problemas antigos do JavaScript;
- Facilitar o desenvolvimento de libraries .

Fantástico não é mesmo? E tem mais... nesse bloco você vai ter o primeiro contato com mais uma ferramenta que fará parte da sua vida de pessoa desenvolvedora: testes. Você aprenderá sobre a importância de testar suas aplicações e desenvolver orientado a testes. Além disso, você vai aprender a instalar e utilizar a biblioteca do Jest para criar seus testes.

Já na aula de hoje, você vai aprender quatro features do ES6 que são muito importantes para que seu código fique limpo e bem escrito, além de resolverem alguns problemas da linguagem.

- let ;
- const ;
- arrow functions ;
- template literals ;
- operador ternário

## Aula 02: JavaScript ES6 - Objects

### O que vamos aprender?

Hoje você vai aprender alguns métodos para interagir com objetos . Esses métodos te ajudarão bastante quando for necessária alguma leitura de seus valores ou chaves, ou quando precisar copiá-los. Esse é um passo muito importante para o bom e mais avançado uso do JavaScript. Objetos são muito presentes em todas as lógicas do ES6 . Os métodos que veremos são:

- Object.keys ;
- Object.entries ;
- Object.assign ;
- Object.values .

### Você será capaz de:

- Acessar todas as chaves de um objeto com o método Object.keys ;
- Acessar os pares chave-valor de um objeto com o método Object.entries ;
- Acessar todos os valores de um objeto com o método Object.values ;
- Copiar um objeto com o método Object.assign ;
- Adicionar propriedades a um objeto.

### Por que isso é importante?

Em JavaScript, o uso de objetos é essencial, você se deparará com eles frequentemente. Esses métodos servem para melhorar o uso do objeto, facilitando o acesso a suas informações e te permitindo adicionar novas funcionalidades a ele. Um exemplo prático disso é que você não precisará mais utilizar um for para percorrer um objeto para pegar sua lista de chaves ou de valores.

## Aula 03: Primeiros passos em Jest

### O que vamos aprender?

Você aprenderá sobre testes unitários e também sobre como testar em pequenos passos.

Já o conceito de testar em pequenos passos fala sobre como orientar nosso desenvolvimento com base nos testes!

Para isso, você utilizará o Jest , um framework de testes para JavaScript desenvolvido pelo Facebook.

### Você será capaz de:

- Entender o que são e para que servem testes unitários;
- Aplicar o conceito de TDD, ou seja, o desenvolvimento orientado a testes;
- Criar testes unitários a partir do framework Jest .

### Por que isso é importante?

O desenvolvimento de software não é algo simples e cada engrenagem de uma aplicação pode ser muito delicada. São muitas variáveis que você deve se preocupar, a cada vez que implementa alguma modificação, como o desempenho, disposição dos componentes e etc. Seria muito infeliz ter que checar cada retorno do seu código antes de toda vez que for fazer um commit. Além disso, não seria confiável, pois seres humanos cometem falhas. Por isso, programe a máquina para trabalhar a seu favor 😉.

Quando você pensa em comprar um carro, espera que ele tenha passado por diversos testes para garantir a sua segurança. Qualquer pessoa deseja um produto de qualidade, por que então não criar aplicações web com esse padrão também? Afinal, a única consequência será reduzir defeitos e aumentar o valor do sistema.

E o mais importante: o mindset que se desenvolve ao escrever testes para uma aplicação força quem desenvolve a imaginar e prever os fluxos que uma pessoa pode percorrer ao usar a sua aplicação. Isso diminui as chances de gerar bugs ou escrever códigos que precisarão ser refeitos depois.

Testes são fundamentais e tem um grande valor no dia a dia de quem desenvolve. Até o curso acabar, espera-se que a ideia de fazer um código sem testá-lo seja incômoda . Você irá se formar com um mindset orientado a testes!