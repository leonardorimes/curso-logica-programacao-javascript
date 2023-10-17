// cria referência ao form e elemento onde será exibida a resposta

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" do evento acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.inNome.value // Obtém valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso // declara a variável peso

    if(masculino) { 
        peso = 22 * Math.pow(altura, 2)
    }else {
        peso = 21 * Math.pow(altura,2)
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
})