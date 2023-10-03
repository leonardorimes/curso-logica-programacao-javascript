// cria referência ao form e aos elementos h3 e h4 (resposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()


    const titulo = frm.inTitulo.value
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) // arredonda para baixo o resto da divisao
    const minutos = duracao % 60 

    resp.innerHTML= titulo
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
})