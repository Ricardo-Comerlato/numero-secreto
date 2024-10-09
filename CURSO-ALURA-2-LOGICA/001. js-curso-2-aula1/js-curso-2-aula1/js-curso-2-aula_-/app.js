let numeroSecreto = gerarNumeroAleatorio()

function verificarChute(){
    let chute = document.querySelector('input').value   //Busca o valor que foi inserido pelo usuário dentro do input do HTML. Isso mostra que o querySelector serve tanto para 
    console.log(chute == numeroSecreto)                 //inserir valores no html quanto para ler valores a partir do HTML.
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}