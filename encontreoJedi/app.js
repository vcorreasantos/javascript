/**
 * Encontre o Jedi
 * @author Vitória Cristina Corrêa dos Santos
 */
function sortearCarta() {

    // Lista de imagens
    let cartas = [
        "img/vader.png",
        "img/stormtrooper.png",
        "img/sabre.png",
        "img/estrelaDaMorte.png"
    ];

    // Sorteia 1 carta
    let indice = Math.floor(Math.random() * cartas.length);
    let cartaSorteada = cartas[indice];

    // Mostra a imagem no <img id="carta">
    document.getElementById("carta").src = cartaSorteada;

    // Verifica se é o Vader
    let resultado = document.getElementById("resultado");

    if (cartaSorteada.includes("vader")) {
        resultado.innerText = "Você encontrou o Darth Vader! A Força está com você.";
        resultado.style.color = "red";
    } else {
        resultado.innerText = "Não é o Vader... tente novamente.";
        resultado.style.color = "gray";
    }
}