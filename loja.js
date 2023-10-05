let carrinhoDeCompras = [];

function adicionarAoCarrinho(item) {
    carrinhoDeCompras.push(item);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    // atualizar a exibição do carrinho com a lista de itens e o valor total da compra
}

let botaoAdicionarAoCarrinho = document.querySelector('#botao-adicionar-ao-carrinho');
botaoAdicionarAoCarrinho.addEventListener('click', function() {
    let item = {
        nome: 'Esquadria de alumínio',
        preco: 100.00
    };
    adicionarAoCarrinho(item);
});
