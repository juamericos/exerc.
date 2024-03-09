function imPar() {
    let numero = document.getElementById('parImpar').value;

    if (numero % 2 === 0) {
        document.getElementById('resultado').innerText = "O número " + numero + " é par!";
    } else {
        document.getElementById('resultado').innerText = "O número " + numero + " é ímpar!";
    }
}