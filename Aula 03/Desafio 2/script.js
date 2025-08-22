document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnVerificar");
    const resultado = document.getElementById("resultado");

    btn.addEventListener("click", () => {
        const temLogin = document.getElementById("login").checked;
        const temSenha = document.getElementById("senha").checked;

        if (temLogin && temSenha) {
            resultado.textContent = "Acesso liberado";
            resultado.className = "verde";
        } else {
            resultado.textContent = "Acesso negado";
            resultado.className = "vermelho";
        }
    });
});
