const prompt = require("prompt-sync")()
const weight  = prompt("Digite o valor da ração em kg: ")
const catConsumption =  prompt("Digite o valor do consumo do gato em gramas: ")
const kilogramsToGrams = weight*1000

const duration = Math.floor(kilogramsToGrams / catConsumption)
const surplus = kilogramsToGrams % catConsumption

console.log(`Duração: ${duration} dias`) // dados de saída
console.log(`Sobra: ${surplus}gr`)