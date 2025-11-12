const express = require('express');
const routes = express.Router();

const Login = require('./controllers/login');
const Cliente = require('./controllers/cliente');
const Pedido = require('./controllers/pedido');
const Item = require('./controllers/itemPedido');
const Estoque = require('./controllers/movimentoEstoque');
const Produto = require('./controllers/produto');
const MiddlewareAuth = require('./middlewares/auth');

routes.get('/', (req, res) => {
  return res.json({
    titulo: 'Padaria Paladar Nobre',
    version: '1.0.0',
    rotas: [
      { metodo: 'POST', path: '/login', descricao: 'Login de usuário' },
      { metodo: 'GET', path: '/clientes', descricao: 'Lista todos os clientes, rota protegida por token' },
      { metodo: 'GET', path: '/clientes/:id', descricao: 'Lista um cliente específico' },
      { metodo: 'POST', path: '/clientes', descricao: 'Cadastra um novo cliente' },
      { metodo: 'PATCH', path: '/clientes/:id', descricao: 'Atualiza um cliente específico' },
      { metodo: 'DELETE', path: '/clientes/:id', descricao: 'Deleta um cliente específico' },
      { metodo: 'GET', path: '/produtos', descricao: 'Lista todos os produtos' },
      { metodo: 'POST', path: '/produtos', descricao: 'Cadastra um novo produto' },
      { metodo: 'PATCH', path: '/produtos/:id', descricao: 'Atualiza um produto específico' },
      { metodo: 'DELETE', path: '/produtos/:id', descricao: 'Deleta um produto específico' },
      { metodo: 'GET', path: '/pedidos', descricao: 'Lista todos os pedidos' },
      { metodo: 'GET', path: '/pedidos/:id', descricao: 'Lista um pedido específico' },
      { metodo: 'POST', path: '/pedidos', descricao: 'Cadastra um novo pedido' },
      { metodo: 'PATCH', path: '/pedidos/:id', descricao: 'Atualiza um pedido específico' },
      { metodo: 'DELETE', path: '/pedidos/:id', descricao: 'Deleta um pedido específico' },
      { metodo: 'GET', path: '/item', descricao: 'Lista todos os itens de pedido' },
      { metodo: 'GET', path: '/item/:id', descricao: 'Lista um item de pedido específico' },
      { metodo: 'POST', path: '/item', descricao: 'Cadastra um novo item de pedido' },
      { metodo: 'PATCH', path: '/item/:id', descricao: 'Atualiza um item de pedido específico' },
      { metodo: 'DELETE', path: '/item/:id', descricao: 'Deleta um item de pedido específico' },
      { metodo: 'GET', path: '/estoque', descricao: 'Lista todos os movimentos de estoque' },
      { metodo: 'GET', path: '/estoque/:id', descricao: 'Lista um movimento de estoque específico' },
      { metodo: 'POST', path: '/estoque', descricao: 'Cadastra um novo movimento de estoque' },
      { metodo: 'PATCH', path: '/estoque/:id', descricao: 'Atualiza um movimento de estoque específico' },
      { metodo: 'DELETE', path: '/estoque/:id', descricao: 'Deleta um movimento de estoque específico' }
    ]
  });
});

routes.post('/login', Login.login);

routes.get('/clientes', MiddlewareAuth.validate, Cliente.read);
routes.get('/clientes/:id', Cliente.readOne);
routes.post('/clientes', Cliente.create);
routes.patch('/clientes/:id', Cliente.update);
routes.delete('/clientes/:id', Cliente.remove);

routes.get('/produtos', Produto.read);
routes.post('/produtos', Produto.create);
routes.patch('/produtos/:id', Produto.update);
routes.delete('/produtos/:id', Produto.remove);

routes.get('/pedidos', Pedido.read);
routes.get('/pedidos/:id', Pedido.readOne);
routes.post('/pedidos', Pedido.create);
routes.patch('/pedidos/:id', Pedido.update);
routes.delete('/pedidos/:id', Pedido.remove);

routes.get('/item', Item.read);
routes.get('/item/:id', Item.readOne);
routes.post('/item', Item.create);
routes.patch('/item/:id', Item.update);
routes.delete('/item/:id', Item.remove);

routes.get('/estoque', Estoque.read);
routes.get('/estoque/:id', Estoque.readOne);
routes.post('/estoque', Estoque.create);
routes.patch('/estoque/:id', Estoque.update);
routes.delete('/estoque/:id', Estoque.remove);

module.exports = routes;