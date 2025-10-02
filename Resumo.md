API da Biblioteca

API RESTful desenvolvida para o controle de livros de uma biblioteca, utilizando Node.js, Express, Sequelize e SQLite.
Este projeto tem como objetivo a aplicação prática de conceitos de CRUD, arquitetura em camadas e boas práticas de programação.

Tecnologias utilizadas: Node.js, Express, Sequelize e SQLite

Como rodar o projeto

Faça o clone deste repositório:

git clone https://github.com/Ertel77/Biblioteca-do-API.git
cd biblioteca-api

Instale as dependências:npm install

Inicie a aplicação:npm start

O servidor ficará acessível em: http://localhost:3000

Endpoints disponíveis
Obter todos os livros
GET /livros

Consultar livro pelo ID
GET /livros/:id

Adicionar um novo livro
POST /livros

Exemplo de corpo (JSON):

{
"titulo": "Memórias Póstumas de Brás Cubas",
"autor": "Machado de Assis",
"anoPublicacao": 1880,
"descricao": "é um romance de Machado de Assis, narrado por um morto que relembra sua vida com ironia, criticando a sociedade e a vaidade humana."
}

Atualizar dados de um livro existente
PUT /livros/:id

Excluir um livro
DELETE /livros/:id
