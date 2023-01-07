# Cashforce

Um projeto que consiste em criar uma API em Node utilizando express e sequelize, conectada ao banco de dados MySQL utilizando VUEJS como Framework FrontEnd.

## Status do projeto

Ainda em desenvolvimento.

## Clone do repositório

```bash
  https: git clone https://github.com/JuanVictorDavila/Vue-project.git
  ssh: git clone git@github.com:JuanVictorDavila/Vue-project.git
  GitHub CLI: git clone gh repo clone JuanVictorDavila/Vue-project
```
<details>
 <summary>
  <strong>Instalação</strong>
 </summary>

 #### Frontend
  ```bash
   cd Vue-project/cash-force-frontend
   npm install
  ```

 #### Backend
  ```bash
   cd Vue-project/cash-force-backend
   npm install
  ```
</details>

## Rodando o projeto

#### Backend

```bash
  cd Vue-project/cash-force-backend
  npm start ou npm run dev (watch mode)
```

### .env

antes de iniciar o projeto, teve configurar o arquivo .env com as suas variáveis de ambiente na pasta /cash-force-backend/src

sequindo as informações:

->Localizar arquivo <strong>.env-example</strong> e renomear para <strong>.env</strong> na pasta /

#### Frontend

```bash
  cd Vue-project/cash-force-frontend
  npm run dev
```

## Rodando os testes

<details>
  <summary>Testes de integração</summary><br>
  
   ```bash
     cd Vue-project/cash-force-backend
     npm run integration:test
   ```
</details>

<details>
  <summary>Testes unitários</summary><br>
  
   ```bash
     cd Vue-project/cash-force-backend
     npm run unit:test
   ```
</details>

## Lint

<details>
  <summary>Lint  with [ESLint](https://eslint.org/)</summary>
  
  ```sh
    npm run lint
  ```
</details>

## Documentação da API

#### GET /nf
| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Retorna todas as notas fiscais | http://localhost:3000/nf |
#### Swagger
http://localhost:3000/api-docs
<details>
  <summary>
    <strong>Exemplo de retorno</strong>
  </summary><br>
   
   ```json
    [
      {
        "orderNumber": "18153",
        "emissionDate": "2020-10-30T11:00:00-03:00",
        "value": "198450",
        "orderStatusBuyer": "0",
        "buyer": {
            "name": "SACADO 001"
      },
        "provider": {
            "name": "CEDENTE 002"
        }
      },
      ...
    ]
   ```
</details>

## Stack utilizada

**Front-end:** VueJS, CSS

**Back-end:** NodeJS, Express, Javascript, Sequelize

**Testes:** Mocha

**Banco:** MySQL

------------------------------------------------------------------------------------------------------------------------------------------------------
