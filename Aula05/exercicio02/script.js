document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("btnContar");

  botao.addEventListener("click", () => {
    let mensagem = "Contagem:\n";
    for (let i = 10; i >= 1; i--) {
      mensagem += i + "\n";
    }
    alert(mensagem);
  });
});
