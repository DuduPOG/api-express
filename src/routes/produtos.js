const express = require('express');
const router = express.Router(); // cria um roteador isolado

const ProdutoController = require('../controllers/ProdutoController')
// src/routes/produtos.js — usando middleware local no POST
const validarProduto = require('../middlewares/validarProduto');

// GET /produtos
router.get('/', ProdutoController.listar());

// GET /produtos/:id
router.get('/:id', ProdutoController.buscar());

// POST /produtos
router.post('/', validarProduto, ProdutoController.criar());

router.put('/:id', validarProduto, ProdutoController.atualizar());

router.delete('/:id', ProdutoController.remover());

module.exports = router;