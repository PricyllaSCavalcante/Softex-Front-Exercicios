document.addEventListener("DOMContentLoaded", () => {
  let numeros = [10, 20, 30, 40, 50];
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  document.getElementById("vetor").textContent = "Vetor: " + numeros.join(", ");
  document.getElementById("resultado").textContent = "Soma dos elementos: " + soma;
});
