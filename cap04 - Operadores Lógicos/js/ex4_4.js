// cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5

    if (horaFranca > 24){
        horaFranca = horaFranca -24 
    }

    // exibe a resposta 

    resp.innerText = `Hora na frança ${horaFranca.toFixed(2)}`
})