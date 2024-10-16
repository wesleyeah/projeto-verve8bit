const listaVerve = document.querySelectorAll(".verve");

listaVerve.forEach(verve => {
    verve.addEventListener("click", () => {
        escondeCartao();
        const idVerveSelecionado = mostraCartao(verve);
        desativaVerve();
        ativaVerveSelecionado(idVerveSelecionado);
    });
});

function ativaVerveSelecionado(idVerveSelecionado) {
    const verveSelecionado = document.getElementById(idVerveSelecionado);
    verveSelecionado.classList.add("ativo");
}

function desativaVerve() {
    const verveAtivo = document.querySelector(".ativo");
    if (verveAtivo) {
        verveAtivo.classList.remove("ativo");
    }
}

function mostraCartao(verve) {
    const idVerveSelecionado = verve.attributes.id.value;
    const idCartao = "cartao-" + idVerveSelecionado.toLowerCase();
    const cartaoAbrir = document.getElementById(idCartao);
    if (cartaoAbrir) {
        cartaoAbrir.classList.add("aberto");
    }
    return idVerveSelecionado;
}

function escondeCartao() {
    const cartaoVerveAberto = document.querySelector(".aberto");
    if (cartaoVerveAberto) {
        cartaoVerveAberto.classList.remove("aberto");
    }
}
