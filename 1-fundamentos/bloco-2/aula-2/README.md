# Aula 02: Git & GitHub - Entendendo os comandos

## Exercícios I

### Agora a prática

__⚠️ Para fazer os exercícios a seguir, você deve utilizar o projeto com o texto no arquivo .txt , localizado dentro do diretório do dia anterior, crie uma cópia para usar no dia de hoje.__

Dessa vez, cada um deve fazer os exercícios em seu computador, ok? Vamos lá! 😋

1. Navegue até a raiz do projeto com o arquivo .txt;

2. Verifique se não existe nada sem "commitar" utilizando git status :
    - Caso exista algo, verifique se é necessário e faça o commit , ou remova-o.

3. Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;

4. No arquivo .txt , ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:

- Exemplo:

```
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
- HTML
- CSS
```

- Faça um git add nome-do-arquivo.extensao ;
- Você pode adicionar todos os arquivos que você modificou usando git add . , mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;
- Agora um git commit -m "Mensagem que você gostaria" ;
- Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, git commit -m "Adiciona nova skill" ;
- Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;
- E por último um git push -u origin trybe-skills-changes ;

5. Abra um Pull Request com uma descrição detalhada:

- Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: *"Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..."* ;
- O merge deve ser feito apenas quando chegar no exercício 10.

6. Retorne para a branch principal, master , com o comando: git checkout master ;

6. Verifique que você está na branch master , com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);

7. Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;

8. No mesmo arquivo .txt que você modificou no passo 4 , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:

9.  Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;

- Faça um git add nome-do-arquivo.extensao ;
- Agora um git commit -m "Mensagem que você gostaria" ;
- e por último um git push -u origin trybe-skills-updates ;
- Após o primeiro "push" da sua branch, você pode usar apenas o comando git push ;
- Abra um Pull Request com uma descrição amigável:
    - O merge deve ser feito apenas quando chegar no exercício 10;

10. Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master , através do Pull Request :

- Primeiro, vá até a página do primeiro Pull Request (branch trybe-skills-changes ) e faça o merge clicando no botão verde __"Merge pull request"__ ;
- Agora, vá até página do outro Pull Request (branch trybe-skills-updates ) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;
- Você terá que resolver esse __conflito__ antes de "mergear" o Pull Request . Clique no botão __"Resolve conflicts"__ , escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>> , elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em __"Mark as resolved"__ e, em seguida, em __"Commit merge"__ ;
- Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎

## Exercício II

### Recapitulando

Agora você já pode esquecer que um dia versionou os arquivos adicionando o nome da versão no final! 😉

- O Git é um sistema de versionamento distribuído (DVCS);
- A maior vantagem do __Git__ é que ele é distribuído, ou seja, o repositório fica na sua máquina e você não precisa se preocupar em fazer "lock" de arquivos assim como em outros VCS's ;
- Vimos que a instalação do __Git__ e sua configuração são simples. Basta baixar o instalador e configurá-lo usando o comando git config ;
- Para iniciar um repositório local, vimos que você tem duas opções:
    - git init (para criar um novo repositório __Git__ ) ;
    - git clone (para copiar um repositório __Git__ existente para sua máquina e, assim, poder criar branches e Pull Requests) .
- O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git;
- Vimos também que, para subir seu código para o __GitHub__ , basta você verificar qual das opções abaixo deseja:
    1. Criar um repositório do zero localmente, na sua máquina, onde utilizará o comando git init ;
    2. Trabalhar num repositório já existente, onde utilizará o comando git clone ;
__Esses dois comandos são excludentes , ou seja, você usa um, ou usa o outro, nunca os dois ao mesmo tempo. Após isso, siga um dos dois fluxos abaixo__
- __Fluxo 1__ - Após git init :
    1. Criar seu primeiro commit ;
    2. Criar o repositório remoto na sua conta do __GitHub__ ;
    3. Adicionar a URL do repositório remoto;
    4. Executar o famoso push .
- __Fluxo 2__ - Após git clone :
    1. Criar sua branch dentro do repositório clonado;
    2. Fazer checkout na sua branch;
    3. Criar seu primeiro commit ;
    4. Executar o famoso push .