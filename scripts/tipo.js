var titulo = document.getElementById('tituloTipo');

var btn = document.querySelector('.btn-tipo');
var btn1 = document.querySelector('.btn-tipo1');

var base64 = false;
var cesar = false;

const radioBtn = document.querySelector("#my-radio")
radioBtn.checked = false
const radioBtn1 = document.querySelector("#my-radio1")
radioBtn1.checked = false

btn.addEventListener('click', () => {
    var base = titulo.innerHTML = "";
    var base = titulo.innerHTML = `Você escolheu <a>Base64</a>`;
    var base64 = true;
    var cesar = false;

    const radioBtn = document.querySelector("#my-radio")
    radioBtn.checked = true
    const radioBtn1 = document.querySelector("#my-radio1")
    radioBtn1.checked = false
})

btn1.addEventListener('click', () => {
    var base = titulo.innerHTML = "";
    var base = titulo.innerHTML = `Você escolheu <a>Cifra de Cesar</a>`;
    var cesar = true;
    var base64 = false;

    const radioBtn = document.querySelector("#my-radio")
    radioBtn.checked = false
    const radioBtn1 = document.querySelector("#my-radio1")
    radioBtn1.checked = true
})





