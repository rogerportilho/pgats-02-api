# API de Transferências

Esta API permite registro, login, consulta de usuários e transferências de valores entre usuários, com regras básicas de negócio. O banco de dados é em memória.

## Instalação

1. Instale as dependências:
   ```powershell
   npm install express swagger-ui-express
   ```

2. Inicie o servidor:
   ```powershell
   node server.js
   ```

## Endpoints

- `POST /auth/register` — Registro de usuário
- `POST /auth/login` — Login de usuário
- `GET /users` — Consulta de usuários
- `POST /transfers` — Transferência de valores
- `GET /api-docs` — Documentação Swagger

## Regras de Negócio
- Não é permitido registrar usuários duplicados.
- Login exige usuário e senha.
- Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.
- Saldo inicial de cada usuário: R$ 10.000,00.

## Testes
Para testar a API, utilize ferramentas como Postman, Insomnia ou automação com Supertest.

## Documentação
Acesse `/api-docs` para visualizar a documentação Swagger.
