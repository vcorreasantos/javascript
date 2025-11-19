/**
 * Calculadora FLEX
 * @author Vitória Cristina Corrêa dos Santos
 * @version 1.0
 */

function calcular() {
    // a linha abaixo captura o valor da caixa de entrada
    let etanol = formFlex.inputEtanol.value
    console.log(etanol) // teste
    let gasolina = formFlex.inputGasolina.value
    console.log(gasolina)

    //logica principal: se o valor do filtro do etanol custar ate 70% do 
    // valor do filtro da gasolina vale mais a pena abastecer com etanol
    if (etanol < 0.7 * gasolina) {
        console.log("Abasteça com Etanol")
        // a linha abaixo identifica o tag e muda a propriedade src
        document.getElementById('status').src = "./img/etanol.png"
    } else {
        console.log("Abasteça com Gasolina")
        document.getElementById('status').src = "./img/gasolina.png"
    }
}
function limpar() {
    document.getElementById('status').src = "./img/neutro.png"
}