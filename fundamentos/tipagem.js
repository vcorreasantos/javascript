/**
 * Tutorial de JavaScripst
 * Estudo da tipagem dinâmica
 * @author Vitoria Cristina Correa dos Santos
 */
console.log("Strings >>>>>>>>>>>>>>>>")
let nome = "Vitória"
console.log(typeof (nome))
console.log(nome)
console.log(nome.replace("Vitória", "Vih"))
// Concatenação (União)
console.log("Aluna:" + nome) // não usar dessa forma
console.log(`Professora: ${nome}`) // forma mais segura

console.log("Numeros >>>>>>>>>>>>>>>>")
let peso = 62
let altura = 1.70
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
// Exemplo: Calculo do imc
let imc
imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)
// ATENÇÃO
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)
console.log("3" * 2)
console.log("10" / 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log(0.1 + 0.7)

console.log("Booleanos >>>>>>>>>>>>>>>>")
let led = false
typeof (led)
console.log("Comparadores especiais")
let x = 2
let y = "2"
console.log(typeof (x))
console.log(typeof (y))
console.log(x == y)
console.log(x === y)
console.log("Problemas no uso do var >>>>>>>>>>>>>>>>>>>")
console.log("var permite redeclarar uma variavel")
var media = 9
console.log(typeof (media))
console.log(media)
var media = 8
console.log(typeof (media))
console.log(media)
// Uso de chaves na linguagem JS
let mediaFinal = 3
console.log(`Média: ${mediaFinal}`)
if (mediaFinal < 5)
    console.log("REPROVADO")
else
    console.log("APROVADO")
console.log("Emitir Certificado") // nao processado na estrutura

for (let i = 1; i <= 10; i++)
    console.log(i)
console.log("não processado na estrutura")








