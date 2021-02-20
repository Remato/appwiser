# App wiser

### A aplicação consiste em uma página de SignIn para autenticação de usuários.

## Estrutura de pastas

A estrutura da aplicação foi dividida nas pastas

`components`: responsável por armazenar código de componentes que podem ser reutilizáveis em outras páginas da aplicação.

`hooks`: apenas existe 1 hook para a autenticação de usuário, para o contexto poder ser acessado por toda aplicação após o login.

`pages`: pasta simples que irá conter todas as possíveis rotas da aplicação para facilitar a navegação e alteração do código.

`services`: responsável por guardar as configurações do axios, a API da aplicação.

`utils`: pasta que contém alguns micro serviços que seriam utilizados na aplicação, o único service que existe é o de validação no campo "email" "password" para fazer a autenticação do usuário utilizando a biblioteca `Yup`.


**Não consegui finalizar a aplicação pois a lib que eu utilizei teve problema de incompatibilidade, com o React e foi uma nova versão saiu hoje, link da Issue abaixo**

[Issue](https://github.com/unform/unform/issues/356#issuecomment-782324905) Unform -> Rect Native
