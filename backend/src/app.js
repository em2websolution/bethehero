const express = require('express');
const cors = require('cors'); 
const { errors } = require('celebrate'); 

const routes = require('./routes'); /** importar rotas de outro arquivo com  ./ mesma pata do index */
const app = express();
 
app.use(cors()); 
app.use(express.json());
app.use(routes); /** Sempre abaixo do */
app.use(errors()); 

module.exports = app;

 

/**
 * Rotas e Recursos
 */

/** 
 * Métodos HTTP 
 * GET: Busca/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * Query Params: Parâmetros nomeados enviados na roda apos interrogação "?nome=Edu&idade=38" (Filtros , paginação)
  * Route Params: Parâmetros utilizados para identificar recursos ("/:id")
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, Firebase, CouchDB
   */

/**
 * Driver do fabricante pode mudar a sintaxe: ex = Select * from users 
 * Query Builder: Javascript nao muda a forma de escrever as query ex = table('users').select('*').where() 
 * 
 */



 