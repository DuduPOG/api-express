const express = require('express');
const sequelize = require('./src/database/connection');
const app = express();
// Define a porta onde o servidor vai escutar
const PORT = 3000;

const logger = require('./src/middlewares/logger');
const validarProduto = require('./src/middlewares/validarProduto');
const produtosRouter = require('./src/routes/produtos');

app.use(express.json());

// Testar conexão ao iniciar o servidor
async function iniciar() {
 try {
    await sequelize.authenticate();
    console.log('✓ Conectado ao PostgreSQL com sucesso!');
    const produtosRouter = require('./src/routes/produtos');
    
    app.use('/produtos', produtosRouter);
    
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
    }
    catch (erro) {
        console.error('✗ Erro ao conectar ao banco:', erro.message);
        process.exit(1);
    }
}
iniciar();
