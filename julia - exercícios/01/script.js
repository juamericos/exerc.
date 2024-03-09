function alterarTexto() {
    let botao = document.getElementById('meuBotao');
    if (botao.innerText === 'Clique em mim!') {
        botao.innerText = 'Clicou!';
    } else {
        botao.innerText = 'Clique em mim!';
    }
}