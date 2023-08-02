// Função para alternar a exibição do artigo completo ao clicar em "Leia mais"
const leiaMaisLinks = document.querySelectorAll(".leia-mais");

leiaMaisLinks.forEach(link => {
    link.addEventListener("click", function () {
        const artigoCompleto = this.nextElementSibling;
        artigoCompleto.classList.toggle("hidden");
        this.classList.toggle("hidden");
    });
});
