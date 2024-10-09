let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function apertaConsole(){
    console.log('O botão foi clicado!')
}

function apertaAlert(){
    alert('Alerta gerado em JS')
}

function apertaPrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil:')
    alert('Estive em ' + cidade + ' e lembrei de você.')
}