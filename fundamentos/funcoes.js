/**
 * Estudo das Funções
 * @author Vitória Cristina Correa dos Santos
 */
// função simples
function hello() {
    console.log("Hello function")
}

console.log(typeof (hello))
hello()

// Função anônima >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Podemos usar let ou const para criar uma funçao anonima, 
// a vantagem de criar funções desta forma é armazenar o resultado da execução.
const hello2 = function () {
    console.log("Hello função anônima")
}
console.log(typeof (hello2))
hello2()

// Simplificação da função anônima (arrow function)>>>>>>>>>>>>>>>>>>>
// function () | simplificado para: () =>
const hello3 = () => {
    console.log("Hello função anônima simplificada")
}
console.log(typeof (hello3))
hello3()

// Simplificação 2 da função anônima >>>>>>>>>>>>>
// Nesse caso só uma linha de código é processada
// Simplificação: _ no lugar de () e omissão de chaves
const hello4 = _=> console.log("Hello função anônima simplificada 2")

console.log(typeof (hello4))
hello4()

// Função com parametros e retorno >>>>>>>>>>>>>>>>>>>>>>>>>>>
function somar(num1, num2) {
    return console.log(num1 + num2)
}

console.log(typeof(somar))
somar(2,2)

// Função anônima com parâmetros e retorno simplificada >>>>>>>>>>>>>>>>>>>>
const somarA = (num1, num2) => {
    return console.log(num1 + num2)
}

console.log(typeof(somarA))
somarA(3,4)

// Função anônima com parâmetros e retorno simplificada 2 >>>>>>>>>>>>>>>>>>>>
// neste caso omitimos chaves e o retorno é implicito
// CUIDADO !!! Não é uma função simples a dica são o parâmetro | sempre que tiver algo dentro dos () não é função simples
const somarAS = (num1, num2) => console.log(num1 + num2)

console.log(typeof(somarAS))
somarAS(5,10)

