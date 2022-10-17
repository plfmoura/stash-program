// pegando botões que farão a ação:
var btnCodificar = document.getElementById("codificar"); 
var btnDecodificar = document.getElementById("decodificar");

// função para codificar
function codifica(){
    // let pra pegar o textarea onde entrará o valor e o resultado
    let texto = document.getElementById("resultado");
    if(texto.value == ""){//se for vazio o espaço de digitar texto
        //me manda esse alerta aqui \/
        alert('Você precisa escrever uma palavra.')
    } else { //caso não, faça a a codificação
        //aqui ele pega o valor do texto e recebe no mesmo lugar
        //o valor do texto transformado em base64
        texto.value = btoa(texto.value); 
    }
}  // tentei com addEventListener mas não foi, por nada, *ignore*

// função para decodificar
function decodifica(){
    // let pra pegar o textarea onde entrará o valor e o resultado
    let texto = document.getElementById("resultado");
    if(texto.value == ""){//se for vazio o espaço de digitar texto
        //me manda esse alerta aqui \/
        alert('Você precisa escrever uma palavra.')
    } else {//caso não, faça a a codificação
        //aqui ele pega o valor do base64 e recebe no mesmo lugar
        //o valor do texto transformado em texto comum
    texto.value = atob(texto.value);
    }
}
/* Pedro Moura 2bjs :* ;*/