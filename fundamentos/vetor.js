/**
 * Vetor (array)
 * @author Vitória Cristina Corrêa dos Santos
 */

//                  [0]     [1]     [2]      [3]      [4]       [5]
let alunosEM1 = ["Victor","Tania","Pedro","Maria","Viviane","Sirlei"]
console.log(typeof(alunosEM1))

// Lendo o valor de um array
console.log(alunosEM1)
console.table(alunosEM1)
console.log(alunosEM1.length) // exibe o tamanho do vetor
console.log(alunosEM1[3])

// Adicionando dados no array
// O push adiciona sempre no fim da lista
alunosEM1.push("Jorge")
console.table(alunosEM1)

// Modificando os dados de um array
alunosEM1[1] = "Tânia"
console.table(alunosEM1)

// Escluindo os dados de um array
// O comando delete exclui os dados sem alterar os índices
delete alunosEM1[3]
console.table(alunosEM1)

// Percorrendo um array
// Usamos um laço for para percorrer o indice e extrair os dados
let notas = [2,5,8,7,9,4,10]
//console.log(notas.length)
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
// Simplificação do laço for para percorrer um array
// for each
notas.forEach((notas) => {
    console.log(notas)
})
// in
for (let i in notas) {
    console.log(notas[i])
}