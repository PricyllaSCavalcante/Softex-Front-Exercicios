document.addEventListener("DOMContentLoaded", () => {
  const inputsDiv = document.getElementById("inputs");
  const resultado = document.getElementById("resultado");

  // cria 5 inputs
  for (let i = 0; i < 5; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = `N${i+1}`;
    inputsDiv.appendChild(input);
  }

  document.getElementById("btnCalcular").addEventListener("click", () => {
    const valores = Array.from(inputsDiv.querySelectorAll("input")).map(el => Number(el.value));

    if (valores.some(isNaN)) {
      resultado.textContent = "Por favor, preencha todos os campos!";
      return;
    }

    let maior = valores[0];
    let menor = valores[0];

    for (let i = 1; i < valores.length; i++) {
      if (valores[i] > maior) maior = valores[i];
      if (valores[i] < menor) menor = valores[i];
    }

    resultado.textContent = `Maior: ${maior} | Menor: ${menor}`;
  });
});

