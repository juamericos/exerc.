function maiorMenor() {
    let number1 = parseInt(document.getElementById('numero1').value);
    let number2 = parseInt(document.getElementById('numero2').value);

    if (number1 > number2) {
        document.getElementById('resultado').innerText = `O número ${number1} é maior que o número ${number2} !`;
    } else if (number1 < number2) {
        document.getElementById('resultado').innerText = `O número ${number1} é maior que o número ${number2} !`;
    } else {
        document.getElementById('resultado').innerText = "Os números são iguais!";
    }
}
