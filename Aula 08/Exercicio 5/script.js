document.addEventListener("DOMContentLoaded", () => {
  // Criando a matriz 4x4
  let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  // Mostrar matriz completa
  let matrizEl = document.getElementById("matriz");
  let tabela = "<table border='1' cellpadding='5' style='margin:auto;'>";
  for (let i = 0; i < matriz.length; i++) {
    tabela += "<tr>";
    for (let j = 0; j < matriz[i].length; j++) {
      tabela += `<td>${matriz[i][j]}</td>`;
    }
    tabela += "</tr>";
  }
  tabela += "</table>";
  matrizEl.innerHTML = tabela;

  // Calcular a diagonal principal
  let diagonal = [];
  for (let i = 0; i < matriz.length; i++) {
    diagonal.push(matriz[i][i]);
  }

  // Mostrar resultado
  document.getElementById("diagonal").textContent =
    "Diagonal Principal: " + diagonal.join(", ");
});
