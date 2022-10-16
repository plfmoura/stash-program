//funcao para capturar texto de um lado e jogar para o outro lado já codificado

var textoOriginal = "";

function codificarTexto(){
    var limparAnterior = document.querySelector('.resultado-texto').innerHTML = "";

    var textoOriginal = document.querySelector('.inserir-texto')
    var textoSaida = document.querySelector('.resultado-texto')

    textoOriginal = textoOriginal.value.toUpperCase()

    for(var i = 0; i < textoOriginal.length; i++) {
        var codigoLetra = textoOriginal.charCodeAt(i) - 65
        var deslocamento = (codigoLetra + 3) % 26

        console.log(codigoLetra)
        console.log(deslocamento)
        deslocamento += 65

        textoSaida.innerText += String.fromCharCode(deslocamento)

    }
        
        let btnCopiado = document.querySelector('.btn-copiar');
            btnCopiado.classList.add('btn-secondary');
            btnCopiado.classList.remove('btn-success');
            //para trocar a cor do botão de copiar...

};


//limpar campo de texto
function limparCampo(){
    document.querySelector('.inserir-texto').value = "";

}

/*desabilitando campo de resultado de ser alterado, somente copiado
var resultadoCampo = document.querySelector('.resultado-texto');
    resultadoCampo.disabled = false;*/

//botao de copiar texto
function copiarResultado(){
    var textoCopiado = document.querySelector('.resultado-texto');
    console.log(textoCopiado);

    navigator.clipboard.writeText(textoCopiado.innerHTML).then(() => {
        let btnCopiado = document.querySelector('.btn-copiar');
        btnCopiado.classList.remove('btn-secondary');
        btnCopiado.classList.add('btn-success');
    })
}





