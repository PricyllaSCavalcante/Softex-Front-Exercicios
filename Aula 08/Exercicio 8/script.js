document.addEventListener("DOMContentLoaded", () => {
  let soma = 0;
  let numeros = [];

  const input = document.getElementById("numero");
  const lista = document.getElementById("lista");
  const resultado = document.getElementById("resultado");

  document.getElementById("btnAdicionar").addEventListener("click", () => {
    const valor = Number(input.value);

    if (valor === 0) {
      resultado.textContent = "Digite 0 apenas no botão 'Finalizar'.";
      return;
    }

    if (!isNaN(valor)) {
      numeros.push(valor);
      soma += valor;
      lista.textContent = "Números digitados: " + numeros.join(", ");
      input.value = "";
      input.focus();
    }
  });

  document.getElementById("btnFinalizar").addEventListener("click", () => {
    resultado.textContent = `A soma dos valores é: ${soma}`;
  });
});

