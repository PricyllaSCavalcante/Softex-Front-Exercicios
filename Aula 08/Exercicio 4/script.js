document.addEventListener("DOMContentLoaded", () => {
  // Matriz 3x3: 3 alunos (linhas) x 3 provas (colunas)
  // Você pode alterar os valores fixos abaixo para os que quiser.
  let notas = [
    [7.5, 8.0, 6.5], // Aluno 1
    [9.0, 5.5, 8.0], // Aluno 2
    [6.0, 7.0, 7.0]  // Aluno 3
  ];

  const tbody = document.querySelector("#tabela tbody");
  const btnRandom = document.getElementById("btnRandom");

  function calcularMedia(linha) {
    const soma = linha.reduce((acc, n) => acc + n, 0);
    return soma / linha.length;
  }

  function render() {
    tbody.innerHTML = "";
    for (let i = 0; i < notas.length; i++) {
      const tr = document.createElement("tr");

      // Coluna: nome do aluno
      const tdAluno = document.createElement("td");
      tdAluno.textContent = `Aluno ${i + 1}`;
      tr.appendChild(tdAluno);

      // Colunas: notas (provas)
      let media = 0;
      for (let j = 0; j < notas[i].length; j++) {
        const td = document.createElement("td");
        td.textContent = notas[i][j].toFixed(1);
        tr.appendChild(td);
      }

      // Média do aluno i
      media = calcularMedia(notas[i]);
      const tdMedia = document.createElement("td");
      tdMedia.innerHTML = `
        ${media.toFixed(2)}
        <span class="badge ${media >= 7 ? "ok" : "low"}">
          ${media >= 7 ? "Aprov." : "Reprov."}
        </span>
      `;
      tr.appendChild(tdMedia);

      tbody.appendChild(tr);
    }
  }

  // Opcional: gera novas notas aleatórias (0–10 com 1 casa)
  function randomizarNotas() {
    for (let i = 0; i < notas.length; i++) {
      for (let j = 0; j < notas[i].length; j++) {
        notas[i][j] = Math.round((Math.random() * 10) * 10) / 10;
      }
    }
    render();
  }

  render();
  btnRandom.addEventListener("click", randomizarNotas);
});
