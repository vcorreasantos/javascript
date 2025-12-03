/**
 * Sorteio de uma carta
 * Exemplo de uso de array para otimizar o código
 * @author Vitória Cristina Correa dos Santos
 */
function sortear() {
    let nipes = ["♥", "♦", "♣", "♠"]
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    // apoio a lógica
    //console.log(faces[10])
    //console.log(nipes[2])

    // sorteio de uma carta
    let nipe = nipes[Math.floor(Math.random() * 4)]
    let face = faces[Math.floor(Math.random() * 13)]

    // apoio a logica
    //console.clear()
    //console.log(face)
    //console.log(nipe)

    //determinar a cor do nite sorteado
    let cor
    if (nipe === "♥" || nipe === "♦") {
        cor = "#ff0000"
    } else {
        cor = "#000"
    }

    // renderização do canto esquerdo da carta
    // .innerHTML insere uma tag no documento html
    document.getElementById('supEsq').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
    //mudar a cor (o js consegue tambem manipular o css usando .style)
    document.getElementById('supEsq').style.color = cor

    // renderização do centro na carta
    let cc = document.getElementById('centroCarta')
    if (face === 'J') {
        cc.innerHTML = `<img src="./img/valete.png>`
    } else if (face === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png>`
    } else if (face === 'K'){
        cc.innerHTML = `<img src="./img/rei.png>`
    } else {
        cc.innerHTML = `<img src="./img/rei.png>`
        cc.style.color = cor
    }

    // renderização do canto inferior direito
    document.getElementById('infDir').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
    //mudar a cor
    document.getElementById('infDir').style.color = cor

}