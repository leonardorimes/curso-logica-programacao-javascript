const frm = document.querySelector("#frm")
const resp = document.querySelector("h3")


const handlePromotion = (price) => {
    return price /2
}


frm.addEventListener("submit", (e) => {
    e.preventDefault()

   const product = frm.inProduct.value
   const price = frm.inPrice.value

   const price3Item =  handlePromotion(price)
    
    resp.innerHTML = `${product}: - Promoção leve 3 por R$ - ${((price*2)+price3Item).toFixed(2)} \n
                      O 3º produto custa apenas: R$ - ${price3Item.toFixed(2)}
    `

})