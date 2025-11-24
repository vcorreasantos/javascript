/**
 * Calculo do IMC
 * @author Vitória Cristina Correa dos Santos
 */

let peso, altura, imc

function calcular() {
    // entrada
    peso = formIMC.inputPeso.value
    altura = formIMC.inputAltura.value
    console.log(peso)
    console.log(altura)
    // processamento
    imc = peso / (altura * altura)
    // saida
    formIMC.textIMC.value = `IMC: ${imc.toFixed(2)}`
    // alterar a imagem rm funçao do resultado
    if (imc < 18.5) {
        document.getElementById('status').src="./img/imc2.png"
    }
    else if (imc <= 24.9) {
        document.getElementById('status').src="./img/imc3.png"
    }
    else if (imc <= 29.9) {
        document.getElementById('status').src="./img/imc4.png"
    }
    else if (imc <= 34.9) {
        document.getElementById('status').src="./img/imc5.png"
    }
    else if (imc <= 39.9) {
        document.getElementById('status').src="./img/imc6.png"
    }
    else {
        document.getElementById('status').src="./img/imc7.png"
    }
}
function limpar() {
    document.getElementById('status').src="./img/imc.png"
}