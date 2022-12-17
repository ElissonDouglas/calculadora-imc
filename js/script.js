let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let res = document.getElementById('resultado');

function calcula(){
    let sexo = document.querySelector('input[name="radsex"]:checked').value;
    res.innerHTML = ''
    if (altura.value == 0 || peso.value == 0) {
        alert("[ERRO] Você precisa preencher todos os campos para continuar.")
    } else {
        if (sexo == 'homem') {
            let imc = peso.value / (altura.value * altura.value)
            let resultado = verificarHomem(imc)
            res.innerHTML = resultado
        } else if (sexo == 'mulher') {
            let imc = peso.value / (altura.value * altura.value)
            let resultado = verificarMulher(imc)
            res.innerHTML = resultado
        }
    }
    
}

/* let imc = peso.value / (altura.value * altura.value);
        let resultado = verificar(imc)
        res.innerHTML = resultado
        alert('passou')*/


function verificarHomem(imc) {
    if (imc < 20) {
        return `<p>Seu IMC é ${imc.toFixed(2)}.<br>Você está <strong>abaixo do peso</strong>.</p>`
    } else if (imc >= 20 && imc <= 24.9) {
        return `<p>Seu IMC é ${imc.toFixed(2)}.<br>Você está no seu <strong>peso normal</strong>.</p>`
    } else if (imc > 25 && imc <= 29.9) {
        return `<p>Seu IMC é ${imc.toFixed(2)}.<br>Você está com <strong>obesidade leve</strong>.</p>`
    } else if (imc >= 30 && imc <= 39.9) {
        return `<p>Seu IMC é ${imc.toFixed(2)}.<br>Você está com <strong>obesidade moderada</strong>.</p>`
    } else if (imc > 40) {
        return `<p>Seu IMC é ${imc.toFixed(2)}.<br>Você está com <strong>obesidade mórbida</strong>.</p>`
} }

function verificarMulher(imc) {
    if (imc < 19) {
        return `<p>Seu IMC é ${imc.toFixed(2)}.<br>Você está <strong>abaixo do peso</strong>.</p>`
    } else if (imc >= 19 && imc <= 23.9) {
        return `<p>Seu IMC é ${imc.toFixed(2)}.<br>Você está no seu <strong>peso normal</strong>.</p>`
    } else if (imc > 24 && imc <= 28.9) {
        return `<p>Seu IMC é ${imc.toFixed(2)}.<br>Você está com <strong>obesidade leve</strong>.</p>`
    } else if (imc >= 29 && imc <= 38.9) {
        return `<p>Seu IMC é ${imc.toFixed(2)}.<br>Você está com <strong>obesidade moderada</strong>.</p>`
    } else if (imc > 39) {
        return `<p>Seu IMC é ${imc.toFixed(2)}.<br>Você está com <strong>obesidade mórbida</strong>.</p>`
}}