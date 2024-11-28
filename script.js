// Define os links para cada categoria
const links = {
    games: "https://www.google.com/search?q=games",
    filmes: "https://www.google.com/search?q=filmes",
    musica: "https://www.google.com/search?q=música"
};

// Seleciona todos os botões
const botoes = document.querySelectorAll('.btn-proximo');

botoes.forEach(botao => {
    botao.addEventListener('click', function () {
        const categoria = this.getAttribute('data-proximo');
        const url = links[categoria];

        if (url) {
            // Redireciona para o link correspondente
            window.location.href = url;
        } else {
            console.error("URL não encontrado para a categoria:", categoria);
        }
    });
});
