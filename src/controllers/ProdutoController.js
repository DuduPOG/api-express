const Produto = require('../models/ProdutoModel');

const express = require('express');
const app = express();


app.use(express.json());


const ProdutoController = {
    listar(req, res) {
        const produtos = Produto.findAll();
        res.json(produtos);
    },

    buscar(req, res) {
        const id = parseInt(req.params.id);
        const produto = Produto.findById(id);
        if (!produto) return res.status(404).json({ erro: 'Não encontrado' });
        res.json(produto);
    },

    criar(req, res) {
        const novo = Produto.create(req.body);
        res.status(201).json(novo);
    },

    atualizar(req, res) {
        const id = Number(req.params.id);
        const atualizado = Produto.update(id, req.body);
        if (!atualizado) return res.status(404).json({ erro: 'Não encontrado' });
        res.json(atualizado);
        },

    remover(req, res) {
        const id = Number(req.params.id);
        const ok = Produto.delete(id);
        if (!ok) return res.status(404).json({ erro: 'Não encontrado' });
        res.status(204).send(); // 204 No Content
    },
};

module.exports = ProdutoController;