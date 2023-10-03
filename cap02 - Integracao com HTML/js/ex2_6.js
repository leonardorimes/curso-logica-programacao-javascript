const frm = document.querySelector("#frm")
const resp = document.querySelector("h3")



const handlePrice = (value) => {
    console.log(value / 15)
    return value / 15
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const price15min = frm.inPrice.value
    const time = frm.inTime.value
    const value = handlePrice(time)

    const total = value <= 1 ? price15min : (value * price15min).toFixed(2)

    resp.innerText = `Valor a pagar ${total}`

    


})