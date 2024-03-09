function alterarCor() {
    let body = document.querySelector('body');
    if (body.style.backgroundColor === 'green') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'green';
    }
}