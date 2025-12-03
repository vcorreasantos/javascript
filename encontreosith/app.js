/**
 * Encontre o Lord Vader
 * @author Vitória Cristina Corrêa dos Santos
 */
function sortearCarta() {

    // Lista de imagens
    let cartas = ["img/vader.png", "img/startrupper.png", "img/sabre.png", "img/estreladamorte.png"];

    // Sorteia 1 carta
    let indice = Math.floor(Math.random() * cartas.length);
    let cartaSorteada = cartas[indice];

    // Mostra a imagem no <img id="carta">
    document.getElementById("carta").src = cartaSorteada;

    // Verifica se é o Vader
    let resultado = document.getElementById("resultado");

    if (cartaSorteada.includes("vader")) {
        resultado.innerText = "Você encontrou o Darth Vader! A Força está com você.";
    } else {
        resultado.innerText = "Você falhou. Darth Vader está… em outro lugar.";
    }
}
function reiniciarJogo() {
    let cartaImg = document.getElementById("carta");
    let resultado = document.getElementById("resultado");

    cartaImg.src = "img/versodacarta.png";
    resultado.innerText = "A carta ainda está selada pelo Lado Sombrio…";

}