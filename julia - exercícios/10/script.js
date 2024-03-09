function salvarDados(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    let contato = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    localStorage.setItem("contato", JSON.stringify(contato));

    alert("Dados salvos com sucesso!");

    document.getElementById("formulario").reset();
}