function trocarImagem() {
    let imagem = document.getElementById('imagem');
    if (imagem.src.endsWith('foto1.jpg')) {
        imagem.src = 'foto2.jpg';
        imagem.alt = 'segunda';
    } else {
        imagem.src = 'foto2.jpg';
        imagem.alt = 'segunda';
    }
}