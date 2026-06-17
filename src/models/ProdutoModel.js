const produtos = [
    {
        id: 1, nome: 'Notebook', preco: 2500.00
    },
    {
        id: 2, nome: 'Mouse', preco: 89.90
    },
];

const ProdutoModel = {
    findAll(){
        return produtos;
    },

    findById(id){
        return produtos.find((p) => p.id === id);
    },

    create(dados) {
        const novoId = produtos.length > 0 ? Math.max(...produtos.map((p) => p.id)) + 1 : 1;
        const novo = { id: novoId, nome, preco };
        produtos.push(novo);
        return novo;
    },
    
    update(id, dados) {
        const idx = produtos.findIndex(p => p.id === id);
        if (idx === -1){
            return null;
        } 
        produtos[idx] = { ...produtos[idx], ...dados };
        return produtos[idx];
    },
    
    delete(id) {
        const idx = produtos.findIndex(p => p.id === id);
        if (idx === -1){
            return false;
        } 
        produtos.splice(idx, 1);
        return true;
    },
};

module.exports = ProdutoModel;