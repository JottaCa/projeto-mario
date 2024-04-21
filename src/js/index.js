/* 
OBJETIVO 1 - quando usuário clicar no botão de 'veja o trailer', devemos abrir a modal com o video do trailer
    - passo 1 - pegar o elemento que representa o botão na tela usando o js
    - passo 2 - identificar qaundo o usuário clicar no botão
    - passo 3 - pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no 'X' devemos fechar a modal
    - passo 1 - pegar o elemento de fechar modal usndo js
    - passo 2 - identificar quando o usuário clicar no 'X'
    - passo 3 - fechar a modal
*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkdoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkdoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", ""); 
})