// Mostra um alerta quando o usuário clicar em qualquer botão
document.querySelectorAll(".button").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Você clicou em:", btn.textContent);
  });
});
