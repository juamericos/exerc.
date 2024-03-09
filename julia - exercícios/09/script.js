function gerarTabuada() {
  let numero = parseInt(document.getElementById("numero").value);
  let tabuada = "";

  for (let i = 1; i <= 10; i++) {
    tabuada += numero + " x " + i + " = " + (numero * i) + "<br>";
  }

  document.getElementById("tabuada").innerHTML = tabuada;
}

