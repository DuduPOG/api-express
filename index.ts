const express: any = require('express');
const app: any = express();

// Define a porta onde o servidor vai escutar
const PORT: number = 3000;

const produtosRouter = require('./src/routes/produtos');

app.use(express.json());

// Registra o roteador com prefixo /produtos
app.use('/produtos', produtosRouter);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
