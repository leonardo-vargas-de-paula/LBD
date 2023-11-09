const express = require('express');

const FuncionarioController = require('../controllers/funcionarioController');

const routes = express.Router();

routes.get('/funcs', FuncionarioController.list)
routes.get('/funcs/:id', FuncionarioController.show)
routes.post('/funcs', FuncionarioController.create)
routes.put('/funcs:id', FuncionarioController.update)
routes.delete('/funcs:id', FuncionarioController.delete)

module.exports = routes;
