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
  return res.json({
    titulo: 'Padaria Paladar Nobre',
    version: '1.0.0',
    rotas: [
      { metodo: 'POST', path: '/login', descricao: 'Login de usuário' },
      { metodo: 'GET', path: '/login', descricao: 'Valida token' },
      { metodo: 'GET', path: '/clientes', descricao: 'Lista todos os clientes' },
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
      { metodo: 'GET', path: '/funcionarios', descricao: 'Lista todos os funcionários' },
      { metodo: 'GET', path: '/funcionarios/:id', descricao: 'Lista um funcionário específico' },
      { metodo: 'POST', path: '/funcionarios', descricao: 'Cadastra um novo funcionário' },
      { metodo: 'PATCH', path: '/funcionarios/:id', descricao: 'Atualiza um funcionário específico' },
      { metodo: 'DELETE', path: '/funcionarios/:id', descricao: 'Deleta um funcionário específico' },
      { metodo: 'GET', path: '/estoque', descricao: 'Lista todos os movimentos de estoque' },
      { metodo: 'GET', path: '/estoque/:id', descricao: 'Lista um movimento de estoque específico' },
      { metodo: 'POST', path: '/estoque', descricao: 'Cadastra um novo movimento de estoque' },
      { metodo: 'PATCH', path: '/estoque/:id', descricao: 'Atualiza um movimento de estoque específico' },
      { metodo: 'DELETE', path: '/estoque/:id', descricao: 'Deleta um movimento de estoque específico' },
      { metodo: 'GET', path: '/fornecedores', descricao: 'Lista todos os fornecedores' },
      { metodo: 'GET', path: '/fornecedores/:id', descricao: 'Lista um fornecedor específico' },
      { metodo: 'POST', path: '/fornecedores', descricao: 'Cadastra um novo fornecedor' },
      { metodo: 'PATCH', path: '/fornecedores/:id', descricao: 'Atualiza um fornecedor específico' },
      { metodo: 'DELETE', path: '/fornecedores/:id', descricao: 'Deleta um fornecedor específico' }

    ]
  });
});

routes.post('/login', Login.login);
routes.get('/login', Login.validaToken);


routes.get('/clientes', Cliente.read);
routes.get('/clientes/:id', Cliente.readOne);
routes.post('/clientes', Cliente.create);
routes.patch('/clientes/:id',  Cliente.update);
routes.delete('/clientes/:id', Cliente.remove);

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