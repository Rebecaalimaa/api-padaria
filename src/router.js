const express = require('express');
const routes = express.Router();

const Login = require('./controllers/login');
const Cliente = require('./controllers/cliente');
const Pedido = require('./controllers/pedido');
const Item = require('./controllers/itemPedido');
const Funcionario = require('./controllers/funcionario');
const Estoque = require('./controllers/movimentoEstoque');
const Produto = require('./controllers/produto');
const Fornecedor = require('./controllers/fornecedor');
const MiddlewareAuth = require('./middlewares/auth');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Padaria Paladar Nobre' });
});

routes.post('/login', Login.login);
routes.get('/login', Login.validaToken);


routes.get('/clientes', MiddlewareAuth.validate, Cliente.read);
routes.get('/clientes/:id', MiddlewareAuth.validate, Cliente.readOne);
routes.post('/clientes', Cliente.create);
routes.patch('/clientes/:id', MiddlewareAuth.validate, Cliente.update);
routes.delete('/clientes/:id', MiddlewareAuth.validate, Cliente.remove);

routes.get('/produtos', Produto.read);
routes.post('/produtos', MiddlewareAuth.validate, Produto.create);
routes.patch('/produtos/:id', MiddlewareAuth.validate, Produto.update);
routes.delete('/produtos/:id', MiddlewareAuth.validate, Produto.remove);

routes.get('/pedidos', MiddlewareAuth.validate, Pedido.read);
routes.get('/pedidos/:id', MiddlewareAuth.validate, Pedido.readOne);
routes.post('/pedidos', MiddlewareAuth.validate, Pedido.create);
routes.patch('/pedidos/:id', MiddlewareAuth.validate, Pedido.update);
routes.delete('/pedidos/:id', MiddlewareAuth.validate, Pedido.remove);

routes.get('/item', MiddlewareAuth.validate, Item.read);
routes.get('/item/:id', MiddlewareAuth.validate, Item.readOne);
routes.post('/item', MiddlewareAuth.validate, Item.create);
routes.patch('/item/:id', MiddlewareAuth.validate, Item.update);
routes.delete('/item/:id', MiddlewareAuth.validate, Item.remove);

routes.get('/funcionarios', MiddlewareAuth.validate, Funcionario.read);
routes.get('/funcionarios/:id', MiddlewareAuth.validate, Funcionario.readOne);
routes.post('/funcionarios', MiddlewareAuth.validate, Funcionario.create);
routes.patch('/funcionarios/:id', MiddlewareAuth.validate, Funcionario.update);
routes.delete('/funcionarios/:id', MiddlewareAuth.validate, Funcionario.remove);

routes.get('/estoque', MiddlewareAuth.validate, Estoque.read);
routes.get('/estoque/:id', MiddlewareAuth.validate, Estoque.readOne);
routes.post('/estoque', MiddlewareAuth.validate, Estoque.create);
routes.patch('/estoque/:id', MiddlewareAuth.validate, Estoque.update);
routes.delete('/estoque/:id', MiddlewareAuth.validate, Estoque.remove);

routes.get('/fornecedores', MiddlewareAuth.validate, Fornecedor.read);
routes.get('/fornecedores/:id', MiddlewareAuth.validate, Fornecedor.readOne);
routes.post('/fornecedores', MiddlewareAuth.validate, Fornecedor.create);
routes.patch('/fornecedores/:id', MiddlewareAuth.validate, Fornecedor.update);
routes.delete('/fornecedores/:id', MiddlewareAuth.validate, Fornecedor.remove);



module.exports = routes;