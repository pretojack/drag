
const botoesCarrossel = document.querySelectorAll(".botao")

const imagems = document.querySelectorAll(".imagem")
const info = document.querySelectorAll(".informacoes")

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', ()=> {
    const botaoSelecionado = document.querySelector(".selecionado")

    botaoSelecionado.classList.remove("selecionado")

    botao.classList.add("selecionado")


    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa")

    imagems[indice].classList.add("ativa")

    const infoAtiva = document.querySelector(".informacoes.ativa")
    infoAtiva.classList.remove("ativa")

    info[indice].classList.add("ativa")

  })
})
