const router = express.Router(); // cria um roteador isolado

const produtos: any = [
    {
        id: 1, nome: 'Notebook', preco: 2500.00
    },
    {
        id: 2, nome: 'Mouse', preco: 89.90
    },
];
// GET /produtos
router.get('/', (req: any, res: any) => {
    res.json(produtos);
});

// GET /produtos/:id
router.get('/:id', (req: any, res: any) => {
 const produto = produtos.find((p: any) => p.id === parseInt(req.params.id));
 if (!produto) return res.status(404).json({ mensagem: 'Não encontrado' });
 res.json(produto);
});

// POST /produtos
router.post('/', (req: any, res: any) => {
    const { nome, preco } = req.body;
    if (!nome || preco === undefined){
        return res.status(400).json({ mensagem: 'Dados inválidos' });
    }
    const novo = { id: Date.now(), nome, preco };
    produtos.push(novo);
    res.status(201).json(novo);
});

module.exports = router;