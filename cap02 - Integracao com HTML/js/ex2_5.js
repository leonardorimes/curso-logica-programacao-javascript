// Uma farmácia está com uma promoção – Na compra de duas
// unidades de um mesmo medicamento, o cliente recebe como desconto os
// centavos do valor total. Elaborar um programa que leia descrição e preço
// de um medicamento. Informe o valor do produto na promoção. A Figura
// 2.9 apresenta a tela com um exemplo de dados de entrada e saída do
// programa.


const frm = document.querySelector("#frm")
const resp = document.querySelector("h3")


function handlePromotion2Items(price) {
    return price * 2
}

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const medice= frm.inMedicamento.value
    const price = frm.inPreco.value
    const promotionPrice = handlePromotion2Items(price)
    const promotion =  Math.floor(promotionPrice)

    resp.innerText = `Promoção de ${medice} \n
                       2 aspirinas por ${promotion}`
})