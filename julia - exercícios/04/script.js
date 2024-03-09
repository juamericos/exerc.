function verificarResposta() {
    let resposta = parseInt(document.getElementById('respostaInput').value);

    if (resposta === 17) {
        document.getElementById('resultado').innerText = "Parabéns, você acertou! Eu tenho 17 anos.";
        document.getElementById('resultado').style.color = "green";
    } else {
        document.getElementById('resultado').innerText = "Que pena, você errou!";
        document.getElementById('resultado').style.color = "red";
    }
}
