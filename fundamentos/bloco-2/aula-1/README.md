# Aula 1: Git & GitHub - O que é e para que serve

## Exercícios I

### Parte 1 - Instalação e configuração

Vamos começar realizando a instalação e configuração do **_Git_** . Siga o passo a passo para deixar o **_Git_** pronto em seu ambiente.

#### Instalação

##### Linux

Para instalar o **_Git_** abra o seu terminal e digite o seguinte comando:

```
sudo apt-get install git-all
```

###### macOS

Para instalar o **_Git_** abra o seu terminal e digite o seguinte comando:

```
brew install git
```

Caso você não possua o brew instalado digite o comando abaixo no seu terminal e após a instalação execute novamente o comando acima:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

##### Configuração

O **_Git_** vem com uma ferramenta chamada git config que permite ver e atribuir variáveis de configuração que controlam todos os aspectos de como o **_Git_** aparece e opera.

###### Identidade

O primeiro passo é configurar sua identidade, seu nome e endereço de e-mail, isso é importante pois cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você criar. Para configurar isso digite o comando abaixo em seu terminal:
>É preciso que o e-mail informado seja o mesmo que você utilizará para criar a sua conta no GitHub

```
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
```

##### Editor

Um outro ponto legal de se configurar é o editor onde você poderá abrir o arquivo de configuração do **_Git_** , .gitconfig , fica fácil de você visualizar as configurações do **_Git_** e também adicionar outras que julgue necessário. Para isso execute o comando à seguir no seu terminal:

```
git config --global core.editor "code --wait"
```
>Esse comando define o editor do .gitconfig como o VS Code , que é o editor que você usará ao longo curso. Caso queira abrir o arquivo de configuração no VS Code basta executar em seu terminal o comando abaixo. Para isso certifique-se que você se encontra no diretório onde o arquivo .gitconfig está localizado.

```
code .gitconfig
```

##### Verificando a instalação e a configuração

Agora que você já configurou tudo, vamos fazer uma validação e verificar se tudo está certinho! 😉

No terminal:

- Digite git --version para saber qual versão do git está instalada.
     - Seu terminal deve conter algo parecido com:

```
git version 2.x.y
```

- Digite git config --list
     - Seu terminal deve conter algo similar a isso:

```
user.email=seuemail@gmail.com
user.name=seunome
```

- O email deve ser o mesmo que você utilizou para se registrar no GitHub

Pronto, agora que tudo está devidamente instalado e configurado, vamos ao próximo passo.

## Exercícios II

### Parte 2 - Criar conta no GitHub

- [Crie sua conta no GitHub usando seu e-mail pessoal](https://github.com/) 🐙

## Exercícios III

### Parte 3 - Adicionando uma chave SSH na sua conta do GitHub

Neste passo, vamos aprender como adicionar uma chave SSH à sua conta do **_GitHub_** , o que vai te permitir fazer pushes e pulls sem ter que ficar digitando usuário e senha, como já explicamos. É de extrema importância que você siga __TODOS__ os passos apresentados no artigo, apenas dessa forma você obterá o resultado esperado.

##### Gerando uma chave SSH

Abra seu terminal e digite o comando abaixo. Ele cria uma nova chave SSH, usando o seu email como rótulo.
>É preciso que o e-mail informado seja o mesmo que você utilizou para criar a sua conta no GitHub

```
ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
```

Durante o processo irá aparecer escrito no terminal Enter a file in which to save the key , quando isso acontecer pressione Enter para aceitar a localização padrão /home/you/.ssh/id_rsa .

```
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
```

Agora você deve digitar uma senha segura.

```
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

#### Adicionando sua chave SSH ao ssh-agent

Primeiro você deve iniciar o ssh-agent em background:

```
eval "$(ssh-agent -s)"
```

Agora você deve adicionar sua chave privada SSH ao ssh-agent . Para isso execute o comando abaixo no terminal:

```
ssh-add ~/.ssh/id_rsa
```

#### Adicionando a chave SSH na sua conta do GitHub

Antes de tudo você deve copiar a sua chave SSH. Para isso, você vai aprender um comando bem útil, mas que nem sempre vem instalado nativamente no Linux: o xclip .

Para entender como funciona o xclip , temos que nos perguntar uma coisa: como se copia um texto ou uma parte dele quando estamos trabalhando com um ambiente de terminal? Provavelmente a primeira coisa que se passou pela sua cabeça foi abrir o arquivo em um editor de texto, selecionar aquilo que você deseja copiar, fechar o editor de texto e depois colar em outro lugar.

Não há nada de errado com essa lógica: ela funciona, mas convenhamos que dá pra ser um pouquinho mais eficiente, né? Aí entra o tal do xclip . Usando esse comando podemos fazer uma ponte diretamente entre os comandos que serão utilizados no terminal e a área de transferência do Linux, ou seja, dá pra copiar a saída de um comando de forma direta pelo terminal!

Vamos ver como funciona? Execute a sequência de comandos abaixo:

```
# Como o xclip não vem instalado por padrão na maioria das distribuições,
# precisaremos instalá-lo usando o comando a seguir:
sudo apt-get install xclip

# Agora utilize o comando abaixo para copiar o conteúdo da sua chave id_rsa.pub
# Para garantir que o conteúdo foi copiado dê Ctrl + V em um editor de texto
xclip -sel clip < ~/.ssh/id_rsa.pub
```

Caso o xclip não funcione, execute o comando abaixo e copie manualmente a saída do terminal.

```
cat ~/.ssh/id_rsa.pub
```

Entre no seu **_GitHub_** e siga os passos abaixo:

- No canto superior direito do GitHub , clique na sua foto de perfil e clique em Settings ;
- Na barra lateral esquerda, clique em SSH and GPG keys ;
- Clique em New SSH key ou Add SSH key ;
- No campo Título , adicione um descrição para a nova chave;
- Cole sua chave dentro do campo Key ;
- Clique em Add SSH key ;
- Caso seja solicitado, confirme sua senha do Github.

Se tiver problemas ao seguir o tutorial acima, consulte a [documentação oficial do GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) .