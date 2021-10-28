# Bloco 9: JavaScript e Testes Assíncronos

## Aula 01: JavaScript Assíncrono e Callbacks

### O que vamos aprender?

Páginas da web não existem sozinhas. Elas carregam imagens, iframes, conteúdo ou recuperam todo tipo de informações de outros lugares que não seus próprios servidores. E depender de algo externo ao seu sistema para fazer algo traz uma problemática: e se o serviço do qual eu dependo sair do ar? E se os servidores dele estiverem lentos? O que acontece com minha página?

Numa lógica normal, sequencial de programação, sua página esperaria o serviço dar retorno ou voltar ao ar para continuar. Ou seja, a página ficaria quebrada, ou teria todo o seu carregamento freado em função de um problema totalmente fora do seu controle. Para lidar com esse problema e outros de natureza similar, existe um conceito que é muito poderoso e presente no JavaScript : a assincronicidade . Em vez de o programa ser carregado todo em sequência, uma linha após a outra, linhas que podem trazer esse tipo de problema podem "ficar carregando", enquanto o resto do seu programa executa normalmente. A execução dessa linha, a espera pela disponibilidade desse serviço, corre paralelamente ao desenvolver do restante do código. É uma execução assíncrona . E isso tem muito poder.

Pareceu interessante?! Pois bem. Para começar, nesta aula você vai aprender três conceitos importantes:

- Operações assíncronas;
- callbacks ;
- Testes com callbacks utilizando o Jest .

### Você será capaz de:

- Aplicar corretamente operações assíncronas;
- Utilizar callbacks corretamente;
- Utilizar o Jest para testar suas callbacks .

### Por que isso é importante?

Até então, você tem programado de uma forma basicamente similar à seguinte:

1 - Execute o passo A ;
2 - Execute o passo B ;
3 - Execute o passo C .

E você, naturalmente, espera que o passo A seja executado antes do B , e que o B seja executado antes do C .

Entretanto, você consegue ir além no JavaScript . 🚀

Suponha que você tenha uma operação A que gaste muito tempo, e que você tenha uma operação B em sequência que independe totalmente de A . B ter que esperar por A é um problema, haja vista que B não depende de forma alguma de A . Como você faz para contornar esse problema?
Resposta: assincronicidade

Com assincronicidade, a operação A começa a executar e, logo em seguida, B também, sem ter que esperar A terminar.

Essa forma de trabalho é natural, e você faz isso o tempo todo sem perceber! Um exemplo clássico: são 20h de uma segunda-feira, você está em casa com fome e decide pedir uma pizza. 🍕 Você fica esperando, sem fazer nada, enquanto a pizza não chega? Você pode fazer o que quiser nesse meio tempo, como escutar música ou ver vídeos no YouTube , por exemplo. E assim que a pizza chegar, você dedica seu tempo para poder jantar.

Nesse exemplo da pizza, o ato de pedir a pizza corresponde a uma operação assíncrona, e os atos de escutar música e ver vídeos no YouTube são exemplos de operações que independem de pedir a pizza.

## Aula 02: JavaScript Assíncrono - Fetch API e async/await

### O que vamos aprender?

Callbacks são utilizadas em toda parte no JavaScript . A depender da complexidade do que você quer fazer, no entanto, as callbacks podem, muito rápido, ficar confusas e pouco legíveis. Para tornar o código mais compreensível, você estudará na aula de hoje JavaScript assíncrono . E, com esse assincronismo , você fará uma pequena página web que colhe dados de um serviço de terceiro utilizando a API dele.

### Você será capaz de:

- Utilizar then() e catch() ;
- Utilizar async await ;
- Fazer integrações com APIs de terceiros.

### Por que isso é importante?

A comunicação com serviços de terceiros é parte do dia a dia de qualquer pessoa que programa. Seja para coletar tweets , seja para abrir um mapa do Google Maps , ou até mesmo se comunicar com um banco de dados ou serviço interno da organização, APIs são sempre a forma de se fazer isso. Entender o que são e como usá-las, ou seja, como fazer sua aplicação se comunicar com elas, é absolutamente fundamental. Hoje você entrará em contato com esse conceito e o praticará por todo o restante do curso.

Tenham em mente que assincronismo não é um conceito trivial ! Você terá muito tempo ao longo do curso para entender esse conceito, então se esforce para fazer o melhor agora, leia tudo, faça os exercícios e saiba que haverá tempo para absorver essa lógica com calma.