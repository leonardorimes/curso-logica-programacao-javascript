const prompt = require("prompt-sync")()
const wage = Number(prompt("Salario: "))  
const companyTime = Number(prompt("Tempo de empresa em anos: "))

fitForEnlargement = companyTime >= 4

const calculateIncrease = (companyTime, wage) => {
    const increaseValue = (companyTime % 4) * 0.01
    
    const total = increaseValue * wage

    return total
}

if(!fitForEnlargement) {
    console.log("Sem direto a aumento por enquanto")
}else{
    const enlargament = calculateIncrease(companyTime, wage) 
    
    console.log(`Seu novo salário é de :  ${enlargament + wage} `)

}


