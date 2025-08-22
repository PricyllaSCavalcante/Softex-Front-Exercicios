document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");

    btn.addEventListener("click", () => {
        const n1 = Number(document.getElementById("nota1").value);
        const n2 = Number(document.getElementById("nota2").value);
        const n3 = Number(document.getElementById("nota3").value);

        if (
            isNaN(n1) || isNaN(n2) || isNaN(n3) ||
            n1 < 0 || n1 > 10 ||
            n2 < 0 || n2 > 10 ||
            n3 < 0 || n3 > 10
        ) {
            alert("Por favor, insira notas válidas entre 0 e 10.");
            return;
        }

        const media = (n1 + n2 + n3) / 3;
        document.getElementById("media").textContent = media.toFixed(2);

        const situacaoEl = document.getElementById("situacao");

        if (media >= 7) {
            situacaoEl.textContent = "Aprovado";
            situacaoEl.className = "verde";
        } else if (media >= 5) {
            situacaoEl.textContent = "Recuperação";
            situacaoEl.className = "amarelo";
        } else {
            situacaoEl.textContent = "Reprovado";
            situacaoEl.className = "vermelho";
        }
    });
});
