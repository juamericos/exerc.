function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let imc = peso / (altura * altura);

    let resultado = "";

    if (imc <= 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc <= 24.9) {
        resultado = "Normal";
    } else if (imc <= 29.9) {
        resultado = "Sobrepeso";
    } else if (imc <= 34.9) {
        resultado = "Obesidade 1";
    } else if (imc <= 39.9) {
        resultado = "Obesidade 2";
    } else {
        resultado = "Obesidade 3";
    }

    document.getElementById("resultado").innerText = "Seu IMC é " + imc.toFixed(2) + ". Você está " + resultado + ".";
}